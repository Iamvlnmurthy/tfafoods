export default function Footer() {
    return (
        <footer className="bg-[var(--color-ink)] py-12 text-[var(--color-paper)] font-sans relative overflow-hidden border-t-8 border-[var(--color-warm)]">
            <div className="container mx-auto px-6 flex flex-col items-center text-center">
                <h4 className="text-3xl md:text-5xl font-hand mb-2 text-[var(--color-sun)] rotate-slight hover:scale-105 transition-transform cursor-pointer">The Family Adventure</h4>
                <p className="text-[var(--color-warm)] font-hand text-xl mb-12">Baked with ❤️, chaos, and a whole lot of love.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl mb-12 text-left">
                    {/* Contact Info */}
                    <div className="space-y-4 font-hand text-lg">
                        <h3 className="text-3xl text-[var(--color-rose)] -rotate-2">Visit Our Kitchen! 🏠</h3>
                        <div className="space-y-2 text-[var(--color-paper)]/90">
                            <p className="flex items-start gap-2">
                                <span className="text-2xl">📍</span>
                                <span>Plot no 153, Venkatrao Nagar Colony,<br />Road No 4, Kukkatpally, Medchal</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="text-2xl">📞</span>
                                <a href="tel:7013956965" className="hover:text-[var(--color-sun)] hover:underline decoration-wavy underline-offset-4 transition-all">7013956965</a>
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="text-2xl">💌</span>
                                <a href="mailto:info.thefamilyadventure@gmail.com" className="hover:text-[var(--color-sun)] hover:underline decoration-wavy underline-offset-4 transition-all">info.thefamilyadventure@gmail.com</a>
                            </p>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-[var(--color-leaf)] rounded-lg rotate-2 group-hover:rotate-6 transition-transform"></div>
                        <div className="relative h-full w-full border-4 border-white rounded-lg overflow-hidden shadow-[4px_4px_0px_var(--color-earth)] -rotate-2 group-hover:rotate-0 transition-transform bg-white">
                            <iframe
                                title="Location Map"
                                width="100%"
                                height="100%"
                                style={{ minHeight: "200px", border: 0 }}
                                src="https://maps.google.com/maps?q=Plot+no+153+Venkatrao+nagar+Colony+Road+no4+kukkatpally+Medchal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="absolute -bottom-6 -right-6 text-4xl animate-bounce delay-700">👇</div>
                    </div>

                    {/* Something Fun */}
                    <div className="relative p-6 border-dashed border-4 border-[var(--color-sky)] rounded-2xl bg-[var(--color-paper)] text-[var(--color-ink)] rotate-1 hover:-rotate-1 transition-transform flex flex-col items-center justify-center text-center">
                        <div className="absolute -top-5 bg-[var(--color-rose)] text-white px-4 py-1 font-hand text-xl rotate-[-4deg] shadow-md">
                            Fun Fact! 🎈
                        </div>
                        <p className="font-hand text-xl mb-4 leading-relaxed">
                            "Did you know? Our Laddoos are tested by a highly qualified panel of 5-year-olds!" 🧒🕵️‍♂️
                        </p>
                        <div className="flex gap-4 text-4xl">
                            <span className="hover:scale-125 transition-transform cursor-grab active:cursor-grabbing">🍭</span>
                            <span className="hover:scale-125 transition-transform cursor-grab active:cursor-grabbing">🍪</span>
                            <span className="hover:scale-125 transition-transform cursor-grab active:cursor-grabbing">🤸</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-8 font-hand text-2xl text-[var(--color-leaf)] tracking-wide mb-8">
                    <a href="https://www.instagram.com/thefamilyadventure.in?igsh=MWNxNWQ5MTlyY3RxOQ==" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-sun)] hover:scale-110 hover:-rotate-6 transition-all">Instagram 📸</a>
                    <a href="#" className="hover:text-[var(--color-sun)] hover:scale-110 hover:rotate-6 transition-all">Facebook 👍</a>
                </div>

                <div className="w-full border-t border-[var(--color-ink)]/30 pt-4 text-sm text-[var(--color-paper)]/60 font-hand tracking-widest">
                    &copy; {new Date().getFullYear()} The Family Adventure. Honest Food, Happy People.
                </div>
            </div>
        </footer>
    );
}
