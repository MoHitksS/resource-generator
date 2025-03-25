import { Schema } from "mongoose"
import connection from "../config/database"

const schema = {
  game_id: { type: String },
  real_id: { type: String },
  game_name: { type: String },
  provider_game_id: { type: String },
  context: { type: Object },
  modes: { type: Object },
  settings: { type: Object },
}

const agentSchema = new Schema(schema, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
})

export default connection.model("booongo_game_pre_data", agentSchema) as any
