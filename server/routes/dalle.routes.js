import express from 'express'
import * as dotenv from 'dotenv'
import {OpenAI} from 'openai'

const openai = new OpenAI({
    apiKey:'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' 
})






dotenv.config()

const router = express.Router()

router.route('/').get((req,res)=>{
    res.status(200).json({message:"Hello from DALLE Router"})
})

router.route('/').get(async(req,res)=>{
    try {
        const {prompt }= req.body
        const response = await openai.createImage({
            prompt, 
            n:1,
            size: '1024*1024',
            response_format: 'b64_json'
        })
        res.status(200).json({photo : image})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong"})
        
    }
})

export default router