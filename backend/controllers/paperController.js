import Paper from "../models/Paper.js";

// Add Paper
export const addPaper = async (req, res) => {
  try {
    const paper = await Paper.create({
      user: req.user._id,
      ...req.body
    });

    res.status(201).json(paper);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Papers
export const getPapers = async (req, res) => {
  try {
    const papers = await Paper.find({ user: req.user._id });
    res.json(papers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Paper
export const updatePaper = async (req, res) => {
  try {
    const paper = await Paper.findById(req.params.id);

    if (!paper)
      return res.status(404).json({ message: "Paper not found" });

    if (paper.user.toString() !== req.user._id.toString())
      return res.status(401).json({ message: "Not authorized" });

    const updated = await Paper.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Paper
export const deletePaper = async (req, res) => {
  try {
    const paper = await Paper.findById(req.params.id);

    if (!paper)
      return res.status(404).json({ message: "Paper not found" });

    if (paper.user.toString() !== req.user._id.toString())
      return res.status(401).json({ message: "Not authorized" });

    await paper.deleteOne();
    res.json({ message: "Paper removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
