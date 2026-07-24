export default function Contact(){

    return(<>
       <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-5xl mx-auto gap-8">
           <div className="block lg:w-1/2 flex-1">
                <div>
                    <h1>I'd love to hear from you! Please reach out! </h1>
                </div>
                    <form action="mailto:sara.vorhaben@gmail.com" method="post" encType="text/plain" className="flex flex-col gap-4 text-start mt-4">
                        <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="font-semibold">Name</label>
                        <input id="name" type="text" name="name" placeholder="Your name" required></input>
                        </div>
                        <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input id="email" type="email" name="email" placeholder="you@example.com" required></input>
                        </div>
                        <div className="flex flex-col gap-1">
                        <label htmlFor="message" className="font-semibold">Message</label>
                        <textarea id="message" name="message" placeholder="What would you like to reach out about?" rows="6" required></textarea>
                        </div>
                        <input type="submit" value="Send" className="button w-fit self-start"/>
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
