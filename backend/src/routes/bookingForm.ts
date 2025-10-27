import Router from "express";
const router=Router();

router.post("/submitBooking",(req,res)=>{
    // Logic to handle booking form submission
    res.status(200).json({message:"Booking submitted successfully"});
});

export default router;