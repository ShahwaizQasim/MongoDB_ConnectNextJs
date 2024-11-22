import ConnectDB from "@/lib/dbConnect"

const course = [
    {
        id: 1,
        title: 'Web Development',
        duration: '6 months'
    },
    {
        id: 2,
        title: 'Python Programming',
        duration: '4 months'
    }
]

export async function GET(request) {
    await ConnectDB();
    return Response.json(
        {
            error: false,
            course: course,
            msg: 'course Fetch Successfully',
        }
    )
}