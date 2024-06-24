import Userschema from '../models/newuser.js';
import user_spy from '../models/user_spy.js';
import bcrypt from 'bcryptjs';

const PostLogin = async (req, res, next) => {
    const { user: mail, pass, date } = req.body;
    let checkmail;
    let isPasswordCorrect;

    try {
        // Check if user exists
        checkmail = await Userschema.findOne({ email: mail });
    } catch (err) {
        console.error('Error finding user by email:', err);
        return res.status(500).json({ msg: 'Internal server error' });
    }

    if (!checkmail) {
        return res.status(401).json({ msg: 'Invalid User!' });
    }

    // Check if password is correct
    isPasswordCorrect = bcrypt.compareSync(pass, checkmail.password);
    if (!isPasswordCorrect) {
        return res.status(401).json(false);
    }

    // Log user login time
    const logUserLogin = async (email) => {
        const currentDate = new Date();
        const localDate = currentDate.toLocaleString(); // Convert to local date and time

        try {
            const user = await user_spy.findOne({ mail: email });
            if (!user) {
                // If the user does not exist in user_spy, create a new entry
                const newUserSpy = new user_spy({ mail: email, login: [date] });
                await newUserSpy.save();
                console.log('Success at first login');
            } else {
                // If the user exists, update the login array
                user.login.push(date);
                await user.save();
                console.log('Success at subsequent login');
            }
        } catch (err) {
            console.error('Error logging user login:', err);
        }
    };

    await logUserLogin(mail);

    return res.status(200).json(true);
};

export default PostLogin;
