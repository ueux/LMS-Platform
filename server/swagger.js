import swaggerAutogen from "swagger-autogen"

const doc = {
    info: {
        title: 'API DOCS',
        description: 'API documentation for the LMS',
        version:"1.0.0"
    },
    host: "localhost:8000",
    schemes:["http"],
}

const outFile = "./swagger-output.json";
const endpointsFiles = ["./routes/analytics.route.ts","./routes/course.route.ts","./routes/layout.route.ts","./routes/notification.route.ts","./routes/order.route.ts","./routes/user.route.ts"];

swaggerAutogen()(outFile,endpointsFiles,doc)