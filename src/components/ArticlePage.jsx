import React from 'react'
import profile from"../assets/profilePhoto.png"


function ArticlePage() {
  return (
   <div className=' max-w-full max-h-full mx-[300px] my-[100px] flex flex-col '>
    <div className='flex gap-4 items-center'>
    <img src={profile} className='w-7 h-7'></img>
    <p className='text-center text-[#434343]'>James Smith</p>
    </div>
    <h1 className='text-[27px] font-bold mt-8'>How I Cracked Google Interviews</h1>
    <div className='flex mt-5 gap-8'>
    <p className='text-[#6b6a6a]  text-[14px]' >Oct 2024</p>
    <p className='text-[#6b6a6a]  text-[14px]' >Freshers</p>
    <p className='text-[#6b6a6a]  text-[14px]' >Microsoft</p>

    </div>  
    <p className='text-[#6b6a6a] mt-6'>I recently completed the interview process at Google, and it was a wild ride!</p>
    <p className='text-[#6b6a6a] mt-6 text-justify leading-6'>The technical interviews covered a spectrum of topics, from algorithmic problem-solving and data structures. Each interviewer delved deep into my understanding of the problem and challenged me to optimize my solutions further.

The interview started with an introduction of both of us and then we had some discussions around my Project and Work Experience.

I recommend preparing a brief introduction covering all the important points of your professional journey as it will be needed in all the following rounds of interviews.

I can not disclose the exact questions as I have signed the Non-Disclosure agreement but I can give a brief idea of the topics and level of questions:

1st Technical Interview — Coding (45 mins)
Topic — Dynamic programming, 2-D Array
Difficulty — Leetcode Medium
The interviewer explained the coding question, provided test cases, and I verbally discussed my approach. I successfully coded the solution and performed a dry run on test cases, correctly explaining the time complexity.
Overall, this round went well, and I rate it as a Strong Hire.

2nd Technical Interview — Coding (45 mins)
Topic — Trees, Depth First Search, Dynamic programming
Difficulty — Leetcode Hard
The interview began with the question, and I quickly coded the solution.
I successfully handled the follow-up questions by explaining my approach and coding the solution.I gave the correct time complexity for all solutions.
Overall, this round also went well, and I rate it as a Strong Hire.

3rd Technical Interview — Coding (45 mins)
Topic — Dynamic Programming, Heap (Priority Queue), Array
Difficulty — Leetcode Hard
The interview began with a challenging question, but I managed to successfully cod the solution and modified it after dry running on test cases to cover the test case.
Overall, this round was challenging, but I managed to handle it well. I rate it as a Hire.

In the end, the interviewers asked me if I had any questions for them and I asked them regarding his journey at Google, their team and projects etc.

I was expected to write all the solutions following best coding practises (OOPs and SOLID principles, naming conventions etc.)

For all the technical rounds, you can get an idea from Codeforces Problem Set.</p>
   </div>  )
}

export default ArticlePage