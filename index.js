const { default: axios } = require('axios')
const cheerio = require('cheerio')
const config = require('./settings')




axios({
    method: "POST",
    url: "https://sosh1.dnevnik.anadyrobr.ru/index.php?option=com_dnevnik&task=dnevnik&date=2022-11-28",
    headers: config.headers,
    data: {
        version: "",
        base: "studium2",
        login: "u5296",
        password: "586712",
        task: "login",
        option: "com_dnevnik",
        controller: ""
    }
}).then(({ data }) => {
    const $ = cheerio.load(data)


    // Понедельник
    const lesson_1 = $('#week_left_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_1 = $('#week_left_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(3)').text()

    const lesson_2 = $('#week_left_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(2) > div:nth-child(1)').text()
    const homework_lesson_2 = $('#week_left_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1)').text()

    const lesson_3 = $('#week_left_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_3 = $('#week_left_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1)').text()


    const lesson_4 = $('#week_left_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_4 = $('#week_left_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1)').text()

    const lesson_5 = $('#week_left_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(7) > td:nth-child(2) > div:nth-child(1)').text()
    const homework_lesson_5 = $('#week_left_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(7) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1)').text()

    const lesson_6 = $('#week_left_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_6 = $('#week_left_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1)').text()

    const lesson_7 = $('#week_left_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(9) > td:nth-child(2) > div:nth-child(1)').text()
    const homework_lesson_7 = $('#week_left_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(9) > td:nth-child(3) > div:nth-child(1)').text()





    // Вторник

    const lesson_1_2 = $('#week_left_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_1_2 = $('#week_left_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1)').text()

    const lesson_2_2 = $('#week_left_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_2_2 = $('#week_left_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(3)').text()

    const lesson_3_2 = $('#week_left_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_3_2 = $('#week_left_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1)').text()


    const lesson_4_2 = $('#week_left_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(2) > div:nth-child(1)').text()
    const homework_lesson_4_2 = $('#week_left_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1)').text()

    const lesson_5_2 = $('#week_left_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(7) > td:nth-child(2) > div:nth-child(1)').text()
    const homework_lesson_5_2 = $('#week_left_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(7) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1)').text()

    const lesson_6_2 = $('#week_left_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(2) > div:nth-child(1)').text()
    const homework_lesson_6_2 = $('#week_left_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(3) > div:nth-child(1)').text()

    const lesson_7_2 = $('#week_left_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(9) > td:nth-child(2) > div:nth-child(1)').text()
    const homework_lesson_7_2 = $('#week_left_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(9) > td:nth-child(3) > div:nth-child(1)').text()



    // Среда

    const lesson_1_3 = $('#week_left_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_1_3 = $('#week_left_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1)').text()

    const lesson_2_3 = $('#week_left_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_2_3 = $('#week_left_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1)').text()

    const lesson_3_3 = $('#week_left_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(2) > div:nth-child(1)').text()
    const homework_lesson_3_3 = $('#week_left_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(3) > div:nth-child(1)').text()


    const lesson_4_3 = $('#week_left_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_4_3 = $('#week_left_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(3)').text()

    const lesson_5_3 = $('#week_left_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(7) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_5_3 = $('#week_left_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(7) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1)').text()

    const lesson_6_3 = $('#week_left_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_6_3 = $('#week_left_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1)').text()

    const lesson_7_3 = $('#week_left_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(9) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_7_3 = $('#week_left_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(9) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1)').text()




    // Четверг

    const lesson_1_4 = $('#week_right_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_1_4 = $('#week_right_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1)').text()

    const lesson_2_4 = $('#week_right_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_2_4 = $('#week_right_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()

    const lesson_3_4 = $('#week_right_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_3_4 = $('#week_right_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1)').text()


    const lesson_4_4 = $('#week_right_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_4_4 = $('#week_right_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1)').text()

    const lesson_5_4 = $('#week_right_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(7) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_5_4 = $('#week_right_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(7) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1)').text()

    const lesson_6_4 = $('#week_right_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_6_4 = $('#week_right_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1)').text()

    const lesson_7_4 = $('#week_right_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(9) > td:nth-child(2) > div:nth-child(1)').text()
    const homework_lesson_7_4 = $('#week_right_inner > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(9) > td:nth-child(3) > div:nth-child(1)').text()


    // Пятница

    const lesson_1_5 = $('#week_right_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(2) > div:nth-child(1)').text()
    const homework_lesson_1_5 = $('#week_right_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(3) > div:nth-child(1)').text()

    const lesson_2_5 = $('#week_right_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_2_5 = $('#week_right_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(3) > div:nth-child(1)').text()

    const lesson_3_5 = $('#week_right_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_3_5 = $('#week_right_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(3)').text()


    const lesson_4_5 = $('#week_right_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_4_5 = $('#week_right_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(3) > div:nth-child(1)').text()

    const lesson_5_5 = $('#week_right_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(7) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_5_5 = $('#week_right_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(3) > div:nth-child(1)').text()

    const lesson_6_5 = $('#week_right_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(7) > td:nth-child(2) > div:nth-child(1)').text()
    const homework_lesson_6_5 = $('#week_right_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(7) > td:nth-child(3) > div:nth-child(1)').text()

    const lesson_7_5 = $('#week_right_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_7_5 = $('#week_right_inner > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(3) > div:nth-child(1)').text()


    // Суббота

    const lesson_1_6 = $('#week_right_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(2) > div:nth-child(1)').text()
    const homework_lesson_1_6 = $('#week_right_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(3) > div:nth-child(1)').text()

    const lesson_2_6 = $('#week_right_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_2_6 = $('#week_right_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(3) > div:nth-child(1)').text()

    const lesson_3_6 = $('#week_right_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_3_6 = $('#week_right_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(3) > div:nth-child(1)').text()

    const lesson_4_6 = $('#week_right_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_4_6 = $('#week_right_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(3) > div:nth-child(1)').text()

    const lesson_5_6 = $('#week_right_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(7) > td:nth-child(2) > div:nth-child(1) > span:nth-child(1)').text()
    const homework_lesson_5_6 = $('#week_right_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(7) > td:nth-child(3) > div:nth-child(1)').text()

    const lesson_6_6 = $('#week_right_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(2) > div:nth-child(1)').text()
    const homework_lesson_6_6 = $('#week_right_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(3) > div:nth-child(1)').text()

    const lesson_7_6 = $('#week_right_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(9) > td:nth-child(2) > div:nth-child(1)').text()
    const homework_lesson_7_6 = $('#week_right_inner > div:nth-child(7) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(9) > td:nth-child(3) > div:nth-child(1)').text()



    console.log("Понедельник:")
    console.log(`${lesson_1.trim().split(" ")[0]} - ${homework_lesson_1.trim().split("   ")[0]}`)
    console.log(`${lesson_2.trim().split(" ")[0]} - ${homework_lesson_2.trim().split("   ")[0]}`)
    console.log(`${lesson_3.trim().split(" ")[0]} - ${homework_lesson_3.trim().split("   ")[0]}`)
    console.log(`${lesson_4.trim().split(" ")[0]} - ${homework_lesson_4.trim().split("   ")[0]}`)
    console.log(`${lesson_5.trim().split(" ")[0]} - ${homework_lesson_5.trim().split("   ")[0]}`)
    console.log(`${lesson_6.trim().split(" ")[0]} - ${homework_lesson_6.trim().split("   ")[0]}`)
    console.log(`${lesson_7.trim().split(" ")[0]} - ${homework_lesson_7.trim().split("   ")[0]}`)
    console.log('\n')
    console.log("Вторник:")
    console.log(`${lesson_1_2.trim().split(" ")[0]} - ${homework_lesson_1_2.trim().split("   ")[0]}`)
    console.log(`${lesson_2_2.trim().split(" ")[0]} - ${homework_lesson_2_2.trim().split("   ")[0]}`)
    console.log(`${lesson_3_2.trim().split(" ")[0]} - ${homework_lesson_3_2.trim().split("   ")[0]}`)
    console.log(`${lesson_4_2.trim().split(" ")[0]} - ${homework_lesson_4_2.trim().split("   ")[0]}`)
    console.log(`${lesson_5_2.trim().split(" ")[0]} - ${homework_lesson_5_2.trim().split("   ")[0]}`)
    console.log(`${lesson_6_2.trim().split(" ")[0]} - ${homework_lesson_6_2.trim().split("   ")[0]}`)
    console.log(`${lesson_7_2.trim().split(" ")[0]} - ${homework_lesson_7_2.trim().split("   ")[0]}`)

    console.log('\n')
    console.log("Среда:")
    console.log(`${lesson_1_3.trim().split(" ")[0]} - ${homework_lesson_1_3.trim().split("   ")[0]}`)
    console.log(`${lesson_2_3.trim().split(" ")[0]} - ${homework_lesson_2_3.trim().split("   ")[0]}`)
    console.log(`${lesson_3_3.trim().split(" ")[0]} - ${homework_lesson_3_3.trim().split("   ")[0]}`)
    console.log(`${lesson_4_3.trim().split(" ")[0]} - ${homework_lesson_4_3.trim().split("   ")[0]}`)
    console.log(`${lesson_5_3.trim().split(" ")[0]} - ${homework_lesson_5_3.trim().split("   ")[0]}`)
    console.log(`${lesson_6_3.trim().split(" ")[0]} - ${homework_lesson_6_3.trim().split("   ")[0]}`)
    console.log(`${lesson_7_3.trim().split(" ")[0]} - ${homework_lesson_7_3.trim().split("   ")[0]}`)

    console.log('\n')
    console.log("Четверг:")
    console.log(`${lesson_1_4.trim().split(" ")[0]} - ${homework_lesson_1_4.trim().split("   ")[0]}`)
    console.log(`${lesson_2_4.trim().split(" ")[0]} - ${homework_lesson_2_4.trim().split("   ")[0]}`)
    console.log(`${lesson_3_4.trim().split(" ")[0]} - ${homework_lesson_3_4.trim().split("   ")[0]}`)
    console.log(`${lesson_4_4.trim().split(" ")[0]} - ${homework_lesson_4_4.trim().split("   ")[0]}`)
    console.log(`${lesson_5_4.trim().split(" ")[0]} - ${homework_lesson_5_4.trim().split("   ")[0]}`)
    console.log(`${lesson_6_4.trim().split(" ")[0]} - ${homework_lesson_6_4.trim().split("   ")[0]}`)
    console.log(`${lesson_7_4.trim().split(" ")[0]} - ${homework_lesson_7_4.trim().split("   ")[0]}`)

    console.log('\n')
    console.log("Пятница:")
    console.log(`${lesson_1_5.trim().split(" ")[0]} - ${homework_lesson_1_5.trim().split("   ")[0]}`)
    console.log(`${lesson_2_5.trim().split(" ")[0]} - ${homework_lesson_2_5.trim().split("   ")[0]}`)
    console.log(`${lesson_3_5.trim().split(" ")[0]} - ${homework_lesson_3_5.trim().split("   ")[0]}`)
    console.log(`${lesson_4_5.trim().split(" ")[0]} - ${homework_lesson_4_5.trim().split("   ")[0]}`)
    console.log(`${lesson_5_5.trim().split(" ")[0]} - ${homework_lesson_5_5.trim().split("   ")[0]}`)
    console.log(`${lesson_6_5.trim().split(" ")[0]} - ${homework_lesson_6_5.trim().split("   ")[0]}`)
    console.log(`${lesson_7_5.trim().split(" ")[0]} - ${homework_lesson_7_5.trim().split("   ")[0]}`)

    console.log('\n')
    console.log("Суббота:")
    console.log(`${lesson_1_6.trim().split(" ")[0]} - ${homework_lesson_1_6.trim().split("   ")[0]}`)
    console.log(`${lesson_2_6.trim().split(" ")[0]} - ${homework_lesson_2_6.trim().split("   ")[0]}`)
    console.log(`${lesson_3_6.trim().split(" ")[0]} - ${homework_lesson_3_6.trim().split("   ")[0]}`)
    console.log(`${lesson_4_6.trim().split(" ")[0]} - ${homework_lesson_4_6.trim().split("   ")[0]}`)
    console.log(`${lesson_5_6.trim().split(" ")[0]} - ${homework_lesson_5_6.trim().split("   ")[0]}`)
    console.log(`${lesson_6_6.trim().split(" ")[0]} - ${homework_lesson_6_6.trim().split("   ")[0]}`)
    console.log(`${lesson_7_6.trim().split(" ")[0]} - ${homework_lesson_7_6.trim().split("   ")[0]}`)


}).catch(err => {
    console.log(err)
})
