const axios = require("axios");
const SENDKEY = process.env.SCKEY;
axios.defaults.headers.common.cookie = process.env.COOKIE;

const checkIn = async () => {
    return axios({
        method: 'post',
        url: 'https://glados.rocks/api/user/checkin',
        data: {
            token: "glados.network"
        }
    })
}

const status = async () => {
    return axios({
        method: 'get',
        url: 'https://glados.rocks/api/user/status'
    })
}

const server = (checkInMessage, leftDays) => {
    return axios({
        method: 'get',
        url: `https://sctapi.ftqq.com/${SENDKEY}.send`,
        params: {
            title: `${leftDays}天后到期，${checkInMessage}`
        }
    })
}

const GLaDOSCheckIn = async () => {
    const checkInMessage = (await checkIn())?.data?.message;
    const leftDays = parseInt((await status())?.data?.data?.leftDays);
    console.log(leftDays, checkInMessage);
    if (SENDKEY) {
        server(checkInMessage, leftDays);
    }
}

GLaDOSCheckIn();
