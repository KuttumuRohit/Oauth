const handleUpload = async () => {
  if (!videoFile || !keyword) {
    setMessage('Please select a video file and enter a keyword.');
    setUploadStatus(false);
    return;
  }

  console.log('Starting upload...');
  // Firebase storage reference to upload video
  const storageRef = ref(storage, `videos/${keyword}/${videoFile.name}`);
  const uploadTask = uploadBytesResumable(storageRef, videoFile);

  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setUploadProgress(progress);
    },
    (error) => {
      setMessage(`Error: ${error.message}`);
      setUploadStatus(false);
    },
    async () => {
      try {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        const videoData = {
          keyword: keyword,
          videoUrl: downloadURL,
          uploadedAt: new Date(),
        };

        await setDoc(doc(db, 'videos', `${keyword}-${Date.now()}`), videoData);
        setMessage('Video uploaded successfully!');
        setUploadStatus(true);
        setUploadProgress(0);
        navigate('/learn-path');
      } catch (err) {
        setMessage(`Error: ${err.message}`);
        setUploadStatus(false);
      }
    }
  );
};
