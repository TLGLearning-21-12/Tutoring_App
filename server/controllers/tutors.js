//All the logic for routes will be done here and then exported to the routes folder and passed in to the appropriate funtion

import PostTutor from "../models/tutorInput.js";

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
