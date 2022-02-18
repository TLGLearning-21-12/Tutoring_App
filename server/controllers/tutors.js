//All the logic for routes will be done here and then exported to the routes folder and passed in to the appropriate funtion

import PostTutor from "../models/tutorInput.js";
import mongoose from "mongoose";

export const getTutors = async (req, res) => {
  try {
    const postTutor = await PostTutor.find();
    res.status(200).json(postTutor);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTutor = async (req, res) => {
  const post = req.body;
  const newPost = new PostTutor(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTutor = async (req, res) => {
  const { id: _id } = req.params;
  const tutor = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatedTutor = await PostTutor.findByIdAndUpdate(
    _id,
    { ...tutor, _id },
    {
      new: true,
    }
  );

  res.json(updatedTutor);
};
