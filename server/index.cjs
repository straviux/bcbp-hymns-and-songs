const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;

const app = express();
const PORT = 3000;

let songList = [];
let categoryList = [];

try {
	// Attempt to require the JSON file
	songList = require('../public/songs.json');
	categoryList = require('../public/category.json');
} catch (error) {
	if (error.code === 'MODULE_NOT_FOUND') {
		console.error('JSON file not found:', error);
	} else {
		console.error('Error loading JSON file:', error);
	}
}
1;
app.use(express.json());
app.use(cors());

app.get('/api/songs', (request, response) => {
	response.json(songList);
});
app.get('/api/category', (request, response) => {
	response.json(categoryList);
});
app.post('/api/addSong', async (req, res) => {
	const { content } = req.body;

	try {
		// res.send(typeof songs);
		let formData = JSON.parse(content);
		// res.send(JSON.parse(content));
		const newData = { songs: [] };
		let i = 1;
		if (songList.songs.length !== 0) {
			let ex;
			const isDuplicate = songList.songs.some((existingData) => {
				// Customize this check based on your data structure
				if (formData.artist) {
					ex = existingData.artist?.toLowerCase();
					return (
						existingData.title?.toLowerCase() == formData.title?.toLowerCase() &&
						existingData.artist?.toLowerCase() == formData.artist?.toLowerCase()
					);
				}
				return existingData.title?.toLowerCase() == formData.title?.toLowerCase();
			});

			if (isDuplicate) {
				res.send({ success: false, message: 'song already exists', data: ex });
				return false;
			} else {
				songList.songs = songList.songs.map((existingData) => {
					return { id: i++, ...existingData };
				});
				newData.songs = songList.songs;
			}
		}
		formData = { id: i++, ...formData };

		newData.songs.push(formData);

		await fs.writeFile('../public/songs.json', JSON.stringify(newData, null, 4), 'utf8');
		res.send({ success: true, message: 'song successfully added' });
	} catch (error) {
		console.error(error);
		res.status(500).send('Error saving file.');
	}
});

app.post('/api/updateSong', async (req, res) => {
	const { content } = req.body;

	try {
		// res.send(typeof songs);
		const formData = JSON.parse(content);
		// res.send(JSON.parse(content));
		const newData = { songs: [] };

		if (songList.songs.length !== 0) {
			const findSong = songList.songs.filter((existingData) => {
				// Customize this check based on your data structure
				return (
					parseInt(existingData.id) == parseInt(formData.id) && existingData.title == formData.title
				);
			});

			if (findSong.length < 1) {
				res.send({
					data: findSong[0],
					success: false,
					message: 'an error has occured while trying to update data, please try again',
				});
				return false;
			} else {
				songList.songs = songList.songs.map((existingData) => {
					if (parseInt(existingData.id) == parseInt(formData.id)) {
						return {
							...existingData,
							title: formData.title,
							artist: formData.artist,
							lyrics: formData.lyrics,
							category: formData.category,
						};
					} else {
						return {
							...existingData,
						};
					}
				});
				newData.songs = songList.songs;
			}
		}

		await fs.writeFile('../public/songs.json', JSON.stringify(newData, null, 4), 'utf8');
		res.send({ success: true, message: 'song successfully updated' });
	} catch (error) {
		console.error(error);
		res.status(500).send('Error saving file.');
	}
});

app.post('/api/updateChords', async (req, res) => {
	const { content } = req.body;

	try {
		// res.send(typeof songs);
		const formData = JSON.parse(content);
		// res.send(JSON.parse(content));
		const newData = { songs: [] };

		if (songList.songs.length !== 0) {
			const findSong = songList.songs.filter((existingData) => {
				// Customize this check based on your data structure
				return (
					parseInt(existingData.id) == parseInt(formData.id) && existingData.title == formData.title
				);
			});

			if (findSong.length < 1) {
				res.send({
					data: findSong[0],
					success: false,
					message: 'an error has occured while trying to update data, please try again',
				});
				return false;
			} else {
				songList.songs = songList.songs.map((existingData) => {
					if (parseInt(existingData.id) == parseInt(formData.id)) {
						return {
							...existingData,
							chords: formData.chords,
						};
					} else {
						return {
							...existingData,
						};
					}
				});
				newData.songs = songList.songs;
			}
		}

		await fs.writeFile('../public/songs.json', JSON.stringify(newData, null, 4), 'utf8');
		res.send({ success: true, message: 'song successfully updated' });
	} catch (error) {
		console.error(error);
		res.status(500).send('Error saving file.');
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
