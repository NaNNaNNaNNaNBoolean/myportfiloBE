const db = require("../database/connect");

class Project {

    constructor ({ id, project_name,project_date, project_description, project_subheading, project_img, project_video, project_likes }) {
        this.id = id;
        this.name = project_name;
        this.date = project_date;
        this.subhead = project_subheading;
        this.description = project_description;
        this.img = project_img;
        this.video = project_video;
        this.likes = project_likes;
    }

    static async getAll() {
        const response = await db.query("SELECT id, project_name, project_subheading, project_date FROM projects ORDER BY project_date DESC;");
        return response.rows.map(p => new Project(p));
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM projects WHERE id = $1;", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate project.")
        }
        return new Project(response.rows[0]);
    }
    async updatelikes(data) {
        const response = await db.query("UPDATE projects SET project_likes = $1 WHERE id = $2 RETURNING id, project_Likes;",
            [ this.likes + data.project_likes, this.id ]);
        if (response.rows.length != 1) {
            throw new Error("Unable to update votes.")
        }
        return new Project(response.rows[0]);
    }
}

module.exports = Project;
