"use client";
import DashboardHero from "../../../app/components/Admin/DashboardHero";
import AdminProtected from "../../../app/hooks/adminProtected";
import Heading from "../../../app/utils/Heading";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar"
import React from "react";
import AllUsers from "../../../app/components/Admin/Users/AllUsers";


type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="Elearning - Admin"
          description="ELearning is a platfrom for student to learn and get help from teachers"
          keywords="Progtamming, Mern, Redux, Machine Learning"
        />
        <div className="flex h-[200vh] ">
          <div className="1500pc:w-[16%] w-1/5 ">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <AllUsers isTeam={true} />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
