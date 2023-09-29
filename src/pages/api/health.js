const handler = (req, res) => {
    res.status(200).json(
      {
        name: 'Sport Club Partner finder Api',
        message: 'server running'
      }
    );
}

export default handler