import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const movie = await prisma.movie.create({
        data: {
            title: 'VINGADORES: ULTIMATO',
            releaseDate: '2019-07-11',
            lengthInMinutes: 181,
            coverUrl: 'https://br.web.img2.acsta.net/c_310_420/pictures/19/04/26/17/30/2428965.jpg',
        }
    })

    const gender = await prisma.gender.create({
        data: {
            name: 'Ação',
        }
    })

    const gender2 = await prisma.gender.create({
        data: {
            name: 'Fantasia',
        }
    })

    const gender3 = await prisma.gender.create({
        data: {
            name: 'Aventura',
        }
    })
}

main()