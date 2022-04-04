

const handler = async (req, res) => {
  try {
    console.log('here')
    res
      .status(200)
      .send(JSON.stringify({  }));
  } catch (e) {
    res.status(500).send(JSON.stringify({ message: `Server error: ${e.message}` }));
  }
};

export default handler;
