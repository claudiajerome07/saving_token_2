const jwt=require('jsonwebtoken')


const encrypt = (payload, secret) => {
  // your code here and return token
  return jwt.sign(payload,secret,{expiresIn:'1h'})
};

const SECRET_KEY='secret-key'
const token=encrypt({userId:123,role:'admin'},SECRET_KEY)
console.log("generated token:",token)

const decrypt=(token,secret)=>{
  try{
    return jwt.verify(token,SECRET_KEY)
  }catch(err){
    if (err.name ==='TokenExpiredError'){
      console.log('Token expired')
    }else{
      console.log("Invalid token")
    }
    return null
  }
}

const decodedData=decrypt(token,SECRET_KEY)
console.log('Decoded data: ',decodedData)
module.exports = encrypt;
