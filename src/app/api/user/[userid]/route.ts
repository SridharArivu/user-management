import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { coonectionStr } from "@/lib/db";
import { User } from "@/lib/model/user";

export async function PUT(request:NextRequest) {
  
    const payload = await request.json();
    const userId = payload.userId;
    const newRole = payload.newRole;
  
    try {
      await mongoose.connect(coonectionStr);
  
      const result = await User.findOneAndUpdate(
        { id: userId },
        { role: newRole },
        { new: true }
      );
  
      return NextResponse.json({ result, success: true });
    } catch (error) {
      console.error("Error updating user role:", error);
      return NextResponse.json({ error: "Error updating user role", success: false });
    }
  }