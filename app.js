document.getElementById("googleLogin").onclick = async function(){

  try{

    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    alert("تم تسجيل الدخول: " + user.displayName);

  } catch(error){

    alert(error.message);
    console.log(error);

  }

};
