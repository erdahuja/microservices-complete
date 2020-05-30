const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
  const { type, data } = req.body;

  if (type === 'CommentCreated') {
    setTimeout((data) => {
      const status = data.content.includes('fuck') ? 'rejected' : 'approved';
      await axios.post('http://event-bus-clusterip-srv:4005/events', {
        type: 'CommentModerated',
        data: {
          id: data.id,
          postId: data.postId,
          status,
          content: data.content
        }
      });
    }, 3000, data);
  }

  res.send({});
});

app.listen(4003, () => {
  console.log('Listening on 4003');
});
