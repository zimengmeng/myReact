let PORT = "";
let testPORT = "http://localhost:3000";
if (process.env.NODE_ENV === 'production') {
    PORT = "http://localhost:8000"
}

export { PORT, testPORT };
