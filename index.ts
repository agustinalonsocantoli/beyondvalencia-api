import app from './src/app';
import dotenv from 'dotenv';
import "./src/database"

dotenv.config()

// PORT
export const PORT = process.env.PORT_KEY ? process.env.PORT_KEY : 3001

// SERVER
try {
    app.listen(PORT, () => {
        console.log(`Server Run on port ${PORT}`);
    })

} catch(err) {
    console.error(err);
}