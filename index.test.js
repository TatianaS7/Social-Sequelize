const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');

let newComment;

describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await db.sync({ force: true })
        newComment = await Comment.create({body: 'Lovely', createdAt: '2-16-2024'});
    })

    // Write your tests here
    
    test("can create a Comment", async() => {
        expect(newComment.body).toBe('Lovely');
    });
    test('can create a Like', async() => {
        const newLike = await Like.create({reactionType: 'thumbs up', createdAt: '2-16-2024'});
        expect(newLike.createdAt).toBe('2-16-2024');
    })
    test('can create a Post', async() => {
        const newPost = await Post.create({title: 'Coding is Fun!', body: 'Multiverse Bootcamp Week 5', createdAt: '2-16-2024'});
        expect(newPost.title).toBe('Coding is Fun!');
    });
    test('can create a Profile', async() => {
        const newProfile = await Profile.create({bio: 'Love to Code', profilePicture: 'My dog and I', birthday: '08-05-2002'});
        expect(newProfile.birthday).toBe('08-05-2002');
    });
    test('can create a User', async() => {
        const newUser = await User.create({username: 'bigdog123', email: 'email@gmail.com'});
        expect(newUser.username).toBe('bigdog123');
    });
})