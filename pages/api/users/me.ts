import type { NextApiRequest, NextApiResponse } from "next"
import { authMiddleware } from "lib/middleware"
import { User } from "lib/user"

async function handler(req: NextApiRequest, res: NextApiResponse, token) {
    const user = new User(token.userId)
    await user.pull()

    res.send(user.data)
}

export default authMiddleware(handler)