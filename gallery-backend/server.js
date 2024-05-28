const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'public/galeria')));

app.get('/api/images', (req, res) => {
  const directories = ['corporate', 'linkedin', 'models', 'actors', 'family'];
  const baseDir = path.join(__dirname, 'public/galeria');

  const imagePaths = directories.reduce((acc, dir) => {
    const dirPath = path.join(baseDir, dir);
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath);
      const images = files.map(file => ({
        src: `/images/${dir}/${file}`,
        category: dir
      }));
      return [...acc, ...images];
    }
    return acc;
  }, []);

  res.json(imagePaths);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
