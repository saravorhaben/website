export default function Contact(){

    return(<>
       <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-5xl mx-auto gap-8">
           <div className="block lg:w-1/2 flex-1">
                <div>
                    <h1>I'd love to hear from you! Please reach out! </h1>
                </div>
                    <form action="mailto:sara.vorhaben@gmail.com" method="post" encType="text/plain" className="flex flex-col text-start">
                        <div>
                        <label id="name">Name:</label>
                        <input type="text" name="name" required></input>
                        </div>
                        <div>
                        <label id="email">Email:</label>
                        <input type="email" name="email" required></input>
                        </div>
                        <label id="message">Message:</label>
                        <textarea name="message" rows="6" required></textarea>
                        <input type="submit" value="Send" className="button"/>
                    </form>
            </div>
            <div className="flex-1 flex items-center justify-center w-1 ">
                    <div className="flex items-center justify-center">
                        <img src="./images/profile.JPG" alt="Sara Vorhaben Profile Photo" className="rounded-full w-32 h-32"/>
                        <div className="m-4">
                        <p className="text-3xl ">Sara Vorhaben</p>
                        <p className="text-lg">sara.vorhaben@gmail.com</p>
                        <p>832-453-2065</p>
                        <div className="p-4">
                        <a href="https://github.com/saravorhaben" class="button">Github</a>
                        <a href="https://www.linkedin.com/in/sara-vorhaben/"  class="button">LinkedIn</a>
                        <a href="mailto:sara.vorhaben@gmail.com" class="button">Email</a>
                        </div>
                        </div>
                    </div>
            </div>
           
        </div>
        </>
    )
}