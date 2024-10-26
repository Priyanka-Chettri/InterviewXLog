import React from "react";
import NavBar from "./NavBar";
import interviewData from "../InterviewListData";
import ArticlePreview from "./ArticlePreview";

function MyProfile() {
  return (
    <div>
      <NavBar />
      <div className="md:mx-[200px] mt-[100px] max-w-screen max-h-screen ">
        {interviewData.map((data, idx) => (
          <ArticlePreview
            key={idx}
            name={data.name}
            title={data.title}
            description={data.description}
            date={data.date}
            category={data.category}
            company={data.company}
            edit="yes"
          />
        ))}
      </div>
    </div>
  );
}

export default MyProfile;
