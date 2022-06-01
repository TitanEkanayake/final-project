import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState, useEffect } from "react";
import { storage, auth, db } from "../../firebase/Firebase_con";
import image from "../../assets/videos/profile-placeholder.png";
import { updateProfile } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "../users/ProfileImage.css";
import { doc, updateDoc } from "firebase/firestore";

export const CProfileImage = () => {
  const [User] = useAuthState(auth);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(image);
  const uid = User ? User.uid : null;

  // upload
  async function upload(file, User, setLoading) {
    const fileRef = ref(storage, User.uid);

    setLoading(true);

    const snapshot = await uploadBytes(fileRef, file);
    const x = await getDownloadURL(fileRef);

    updateProfile(User, { photoURL: x });
    await updateDoc(doc(db, "company", uid), { image: x });

    setLoading(false);
    alert("Uploaded file!");
    window.location.reload(false);
  }

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  function handleClick() {
    upload(photo, User, setLoading);
  }

  useEffect(() => {
    if (User?.photoURL) {
      setPhotoURL(User.photoURL);
    }
  }, [User]);

  return (
    <div className="four wide column profile-image">
      <img alt="avatar" className="avatar" src={photoURL} />
      <input
        className="file-input"
        type="file"
        accept=".png,.jpg"
        onChange={handleChange}
      />
      <br />
      <button
        className="btn btn-primary"
        disabled={loading || !photo}
        onClick={handleClick}
      >
        Upload Photo
      </button>
    </div>
  );
};
