import express from "express";
const router= express.Router();

router.get('/',(req,res)=>{
    return res.json({
        success: true,
        message: "running successfully"
    })
})



export default router;