import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full space-y-5">
      <div className=" border border-secondary items-center justify-center   rounded-2xl shadow-xl bg-primary p-2 ">
        <h1 className="text-white text-xl font-medium title-font">
          How to be More Productive and Eliminate Time Wasting Activities by
          Using the “Eisenhower Box”
        </h1>
      </div>
      <div className=" border border-secondary items-center justify-center  w-[700px]  rounded-2xl shadow-xl bg-primary p-2 ">
        <p className="text-white text-l font-serif font-medium title-font">
          The Eisenhower Matrix is a time management tool for prioritizing
          tasks. It is also known as the Urgent/Important Matrix, Time
          Management Matrix and the Eisenhower Method.
        </p>
      </div>
      <div className=" border border-secondary items-center justify-center  w-[700px]  rounded-2xl shadow-xl bg-primary p-2 ">
        <p className="text-white text-l font-serif font-medium title-font">
          The Eisenhower Matrix gets its name from the 34th president of the
          United States, Dwight D. Eisenhower, who was quoted saying, "I have
          two kinds of problems, the urgent and the important. The urgent are
          not important, and the important are never urgent." This method was
          popularized by Stephen Covey's book The 7 Habits of Highly Effective
          People. According to a consumer research study titled "The Mere
          Urgency Effect," people naturally choose urgency over importance by
          prioritizing tasks that are time-sensitive and less important, over
          tasks that are less urgent but offer greater rewards. The Eisenhower
          Matrix is used to overcome this common bias, as it factors in the
          importance of a task along with its urgency.
        </p>
      </div>
      <div className=" border border-secondary items-center justify-center  w-[700px]   rounded-2xl shadow-xl bg-primary p-2 ">
        <h2 className="text-white text-xl font-medium title-font text-center">
          How does the Eisenhower Matrix work?
        </h2>
        <p className="text-white text-l font-serif font-medium title-font">
          The matrix is divided into four quadrants. Users consider the urgency
          and importance of their individual activities, and sort them into the
          appropriate quadrants. Each quadrant has a specific call to action --
          do, schedule, delegate or eliminate. Each quadrant has its own
          priority level: Quadrant 1 tasks should be done first, while Quadrant
          4 tasks should be done last or eliminated.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
