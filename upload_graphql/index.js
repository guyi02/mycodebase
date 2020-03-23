import cloudinary from "cloudinary";
import * as fs from "fs";

singleUpload: async (root, { file }) => {
    cloudinary.config({
        cloud_name: "guyi02",
        api_key: "174316115527331",
        api_secret: "9Rae1WoyBGOegV4PK5GNZhYq_E4",
    });

    const { createReadStream, filename, mimetype, encoding } = await file;
    const stream = createReadStream();
    await new Promise((resolve, reject) => {
        stream
            .on("error", error => {
                unlink("./uploads", () => {
                    reject(error);
                });
            })
            .pipe(
                cloudinary.v2.uploader.upload_stream(
                    {
                        folder: "app_assets",
                    },
                    (error, res) => {
                        if (error) {
                            console.log(error);
                        }
                        console.log(res.secure_url);
                    },
                ),
            )
            .on("error", reject)
            .on("finish", resolve);
    });

    return {
        filename,
        mimetype,
        encoding,
    };
},