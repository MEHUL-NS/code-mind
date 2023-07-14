import express from 'express'
import axios from 'axios'
import * as cheerio from 'cheerio';


export const displayProblem = async(req,res) => {    
    try{
        const response = await axios.get(`https://projecteuler.net/problem=1`)       
        const $ = await cheerio.load(response.data)
        
        const problems = [];

        $("#content > h2").each((i,e) => {
            problems.push($(e).text().trim())
        })
        res.send(problems)
        console.log(problems)
        
       

       
    }catch(error){
        res.send({message:error.message});
    }
}