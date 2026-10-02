const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB Atlas
const client = new MongoClient(process.env.MONGODB_URI);

let db;
let experiencias;

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({
    mensaje: 'API HojasDeVida funcionando correctamente'
  });
});

// ===============================
// CREAR EXPERIENCIA - POST
// ===============================
app.post('/api/experiencias', async (req, res) => {
  try {
    const experiencia = {
      empresa: req.body.empresa,
      cargo: req.body.cargo,
      anio: req.body.anio,
      descripcion: req.body.descripcion
    };

    const resultado = await experiencias.insertOne(experiencia);

    res.status(201).json({
      mensaje: 'Experiencia creada correctamente',
      id: resultado.insertedId
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Error al crear la experiencia'
    });
  }
});

// ===============================
// OBTENER TODAS - GET
// ===============================
app.get('/api/experiencias', async (req, res) => {
  try {
    const datos = await experiencias.find().toArray();

    res.json(datos);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Error al obtener las experiencias'
    });
  }
});


app.get('/api/experiencias/:id', async (req, res) => {
  try {
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        error: 'ID no válido'
      });
    }

    const experiencia = await experiencias.findOne({
      _id: new ObjectId(id)
    });

    if (!experiencia) {
      return res.status(404).json({
        error: 'Experiencia no encontrada'
      });
    }

    res.json(experiencia);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Error al obtener la experiencia'
    });
  }
});


// ACTUALIZAR

app.put('/api/experiencias/:id', async (req, res) => {
  try {
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        error: 'ID no válido'
      });
    }

    const actualizacion = {
      empresa: req.body.empresa,
      cargo: req.body.cargo,
      anio: req.body.anio,
      descripcion: req.body.descripcion
    };

    const resultado = await experiencias.updateOne(
      { _id: new ObjectId(id) },
      { $set: actualizacion }
    );

    if (resultado.matchedCount === 0) {
      return res.status(404).json({
        error: 'Experiencia no encontrada'
      });
    }

    res.json({
      mensaje: 'Experiencia actualizada correctamente'
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Error al actualizar la experiencia'
    });
  }
});

// ===============================
// ELIMINAR EXPERIENCIA - DELETE
// ===============================
app.delete('/api/experiencias/:id', async (req, res) => {
  try {
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        error: 'ID no válido'
      });
    }

    const resultado = await experiencias.deleteOne({
      _id: new ObjectId(id)
    });

    if (resultado.deletedCount === 0) {
      return res.status(404).json({
        error: 'Experiencia no encontrada'
      });
    }

    res.json({
      mensaje: 'Experiencia eliminada correctamente'
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Error al eliminar la experiencia'
    });
  }
});

async function iniciarServidor() {
  try {
    await client.connect();

    db = client.db('HojasDeVida');

    experiencias = db.collection('experiencias');

    console.log(' Conectado a MongoDB Atlas');
    console.log('Colección "experiencias" lista');

    app.listen(PORT, () => {
      console.log(` Servidor ejecutándose en http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error(' Error al conectar con MongoDB:', error);
  }
}

iniciarServidor();
