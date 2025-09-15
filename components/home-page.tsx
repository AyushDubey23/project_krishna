"use client"

import { useState } from "react"
import { Menu, X, Instagram, Linkedin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const roles = [
  {
    title: "DIRECTOR",
    image: "/hero1.png",
    projects: [
      { title: "Urban Symphony", category: "NARRATIVE", image: "/director1.jpg" },
      { title: "Silent Echoes", category: "TRAILER", image: "/director2.jpg" },
      { title: "Tea Stories", category: "DOCUMENTARY", image: "/director3.jpg" },
      { title: "Crossroads", category: "COMMERCIAL", image: "/director4.jpg" },
    ],
  },
  {
    title: "EDITOR/GAFFER",
    image: "/home2.jpg",
    projects: [
      { title: "Night Scenes", category: "NARRATIVE", image: "/editorgaffer1.jpg" },
      { title: "Light Study", category: "TRAILER", image: "/editorgaffer2.jpg" },
      { title: "Color Grading", category: "DOCUMENTARY", image: "/editorgaffer3.jpg" },
      { title: "Brand Film", category: "COMMERCIAL", image: "/editorgaffer4.jpg" },
    ],
  },
  {
    title: "PRODUCER",
    image: "/home3.jpg",
    projects: [
      { title: "Independent Film", category: "NARRATIVE", image: "/producer1.jpg" },
      { title: "Short Film Series", category: "TRAILER", image: "/producer2.jpg" },
      { title: "Documentary Series", category: "DOCUMENTARY", image: "/producer3.jpg" },
      { title: "Corporate Video", category: "COMMERCIAL", image: "/producer4.jpg" },
    ],
  },
  {
    title: "SOUND DESIGNER",
    image: "/home4.jpg",
    projects: [
      { title: "Audio Drama", category: "NARRATIVE", image: "/sounddesigner1.jpg" },
      { title: "Film Score", category: "TRAILER", image: "/sounddesigner2.jpg" },
      { title: "Podcast Series", category: "DOCUMENTARY", image: "/sounddesigner3.jpg" },
      { title: "Brand Audio", category: "COMMERCIAL", image: "/sounddesigner4.jpg" },
    ],
  },
  {
    title: "BOOM MIC OPERATOR",
    image: "/home5.jpg",
    projects: [
      { title: "Dialogue Recording", category: "NARRATIVE", image: "/boommicoperator1.jpg" },
      { title: "Location Sound", category: "TRAILER", image: "/boommicoperator2.jpg" },
      { title: "Interview Setup", category: "DOCUMENTARY", image: "/boommicoperator3.jpg" },
      { title: "Live Recording", category: "COMMERCIAL", image: "/boommicoperator4.jpg" },
    ],
  },
  {
    title: "PHOTOGRAPHER",
    image: "/home6.jpg",
    projects: [
      { title: "Portrait Series", category: "NARRATIVE", image: "/photographer1.jpg" },
      { title: "Behind Scenes", category: "TRAILER", image: "/photographer2.jpg" },
      { title: "Street Photography", category: "DOCUMENTARY", image: "/photographer3.jpg" },
      { title: "Product Shots", category: "COMMERCIAL", image: "/photographer4.jpg" },
    ],
  },
]

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState("home")
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const renderHome = () => (
    <div className="min-h-screen overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-40 bg-background">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light tracking-[0.2em] text-black">HRIDAY BAJAJ</h1>
            <p className="text-xs text-gray-600 tracking-[0.15em] mt-1">FILM STUDENT</p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:bg-transparent hamburger-icon"
          >
            <Menu className="h-5 w-5 text-black" />
          </Button>
        </div>
      </header>

      <div className="pt-20">
        <div className="space-y-6 px-0">
          {roles.map((role, index) => (
            <div
              key={role.title}
              className="relative h-[50vh] bg-gray-100 overflow-hidden group cursor-pointer tile-hover"
              onClick={() => setSelectedRole(role.title.toLowerCase().replace(/[^a-z]/g, ""))}
            >
              <img
                src={role.image || "/placeholder.svg"}
                alt={role.title}
                className="w-full h-full object-cover tile-image"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                <h2 className="text-white text-4xl md:text-6xl font-light tracking-[0.3em] tile-text">{role.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="py-8 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-8 mb-4">
            <a
              href="https://instagram.com/bajaj_hriday"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors social-icon"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/hridaybajaj019/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors social-icon"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919559314530"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors social-icon"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
          <p className="text-center text-xs text-gray-500 tracking-wider">© 2024 Hriday Bajaj. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )

  const renderProjects = (roleTitle: string) => {
    const role = roles.find((r) => r.title.toLowerCase().replace(/[^a-z]/g, "") === roleTitle)
    if (!role) return null

    return (
      <div className="min-h-screen bg-background overflow-x-hidden">
        <header className="fixed top-0 left-0 right-0 z-40 bg-background">
          <div className="container mx-auto px-6 py-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-light tracking-[0.2em] text-black">HRIDAY BAJAJ</h1>
              <p className="text-xs text-gray-600 tracking-[0.15em] mt-1">FILM STUDENT</p>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-transparent hamburger-icon"
            >
              <Menu className="h-5 w-5 text-black" />
            </Button>
          </div>
        </header>

        <div className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            <div className="space-y-6 max-w-4xl mx-auto">
              {role.projects?.map((project, index) => (
                <div key={project.title} className="relative h-[40vh] bg-gray-100 overflow-hidden group tile-hover">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover tile-image"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10">
                    <div className="text-center text-white tile-text">
                      <div className="text-xs tracking-wider mb-2">{project.category}</div>
                      <div className="text-2xl md:text-4xl font-light tracking-wider">{project.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                variant="ghost"
                onClick={() => setSelectedRole(null)}
                className="text-gray-600 hover:text-black tracking-wider hover-scale"
              >
                ← Back to Home
              </Button>
            </div>
          </div>
        </div>

        <footer className="py-8 bg-background border-t border-gray-200">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center space-x-8 text-sm">
              <a href="#" className="text-gray-600 hover:text-black transition-colors tracking-wider">
                IMDB
              </a>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600 tracking-wider">CONTACT</span>
              <span className="text-gray-400">|</span>
              <a
                href="mailto:hridaybajaj@gmail.com"
                className="text-gray-600 hover:text-black transition-colors tracking-wider"
              >
                HRIDAYBAJAJ@GMAIL.COM
              </a>
            </div>
          </div>
        </footer>
      </div>
    )
  }

  const renderBio = () => (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-40 bg-background">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light tracking-[0.2em] text-black">HRIDAY BAJAJ</h1>
            <p className="text-xs text-gray-600 tracking-[0.15em] mt-1">FILM STUDENT</p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:bg-transparent hamburger-icon"
          >
            <Menu className="h-5 w-5 text-black" />
          </Button>
        </div>
      </header>

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <img
                src="/professional-filmmaker-portrait.png"
                alt="Hriday Bajaj"
                className="w-full max-w-md mx-auto lg:mx-0 grainy-effect"
              />
            </div>

            <div className="space-y-6 text-sm leading-relaxed text-gray-700">
              <p>
                <strong>Hriday Bajaj</strong> is a multi-disciplinary filmmaker based in India. Born and raised in
                Mumbai, he spent his formative years developing a passion for visual storytelling, and his work revolves
                around themes of human connection and cultural identity. Prior to directing, he worked extensively as an
                editor and gaffer on numerous independent films, as well as commercial projects. He has also worked as a
                producer on over 20 short films from across India, including projects from Mumbai, Delhi, Bangalore, and
                Pune. He holds a degree in Film Production from the Film and Television Institute of India. His editing
                credits include
                <em> Urban Symphony</em> (Mumbai International Film Festival, Delhi Film Festival),
                <em> Silent Echoes</em> (BAFTA Student Film Awards, Student Academy Awards, National Film Awards), and{" "}
                <em> Crossroads</em>.
              </p>

              <p>
                Hriday's short film <em>Tea Stories</em> (चाय की कहानियाँ) premiered at the Mumbai International Film
                Festival and was a recipient of the Young Filmmaker Fellowship. Shot in Mumbai, the film explores the
                relationship between two generations who must confront their different perspectives on tradition and
                modernity to move forward with their family business. Hriday tells stories of characters navigating
                cultural transitions and finding their place in a rapidly changing world.
              </p>

              <p>
                He is fluent in Hindi and English. <em>Kahaniyan sunata hun main.</em>
                Hriday currently works as a freelance filmmaker across multiple disciplines.
              </p>

              <div className="mt-8">
                <a
                  href="/assets/hriday-bajaj-resume.pdf"
                  download="Hriday_Bajaj_Resume.pdf"
                  className="inline-block px-6 py-3 bg-black text-white text-xs tracking-wider hover:bg-gray-800 transition-colors hover-scale"
                >
                  DOWNLOAD RESUME
                </a>
              </div>

              <p className="text-xs text-gray-500 mt-8">
                Photo courtesy of{" "}
                <a href="#" className="underline">
                  Arjun Sharma
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center space-x-8 text-sm">
            <a href="#" className="text-gray-600 hover:text-black transition-colors tracking-wider">
              IMDB
            </a>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600 tracking-wider">CONTACT</span>
            <span className="text-gray-400">|</span>
            <a
              href="mailto:hridaybajaj@gmail.com"
              className="text-gray-600 hover:text-black transition-colors tracking-wider"
            >
              HRIDAYBAJAJ@GMAIL.COM
            </a>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background menu-overlay">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 hover:bg-transparent hamburger-icon"
          >
            <X className="h-5 w-5 text-black" />
          </Button>

          <div className="menu-content">
            <div className="text-center space-y-6">
              <button
                onClick={() => {
                  setCurrentSection("home")
                  setIsMenuOpen(false)
                }}
                className="block text-2xl font-light tracking-[0.2em] text-black hover:text-gray-600 transition-colors menu-item"
              >
                Home
              </button>
              <div className="w-12 h-px bg-black mx-auto"></div>

              <button
                onClick={() => {
                  setSelectedRole("director")
                  setIsMenuOpen(false)
                }}
                className="block text-2xl font-light tracking-[0.2em] text-black hover:text-gray-600 transition-colors menu-item"
              >
                Director
              </button>

              <button
                onClick={() => {
                  setSelectedRole("editorgaffer")
                  setIsMenuOpen(false)
                }}
                className="block text-2xl font-light tracking-[0.2em] text-black hover:text-gray-600 transition-colors menu-item"
              >
                Editor/Gaffer
              </button>

              <button
                onClick={() => {
                  setSelectedRole("producer")
                  setIsMenuOpen(false)
                }}
                className="block text-2xl font-light tracking-[0.2em] text-black hover:text-gray-600 transition-colors menu-item"
              >
                Producer
              </button>

              <button
                onClick={() => {
                  setSelectedRole("sounddesigner")
                  setIsMenuOpen(false)
                }}
                className="block text-2xl font-light tracking-[0.2em] text-black hover:text-gray-600 transition-colors menu-item"
              >
                Sound Designer
              </button>

              <button
                onClick={() => {
                  setSelectedRole("boommicoperator")
                  setIsMenuOpen(false)
                }}
                className="block text-2xl font-light tracking-[0.2em] text-black hover:text-gray-600 transition-colors menu-item"
              >
                Boom Mic Operator
              </button>

              <button
                onClick={() => {
                  setSelectedRole("photographer")
                  setIsMenuOpen(false)
                }}
                className="block text-2xl font-light tracking-[0.2em] text-black hover:text-gray-600 transition-colors menu-item"
              >
                Photographer
              </button>

              <button
                onClick={() => {
                  setCurrentSection("bio")
                  setIsMenuOpen(false)
                }}
                className="block text-2xl font-light tracking-[0.2em] text-black hover:text-gray-600 transition-colors menu-item"
              >
                Bio | Contact
              </button>
            </div>
          </div>

          <div className="menu-footer">
            <div className="flex items-center space-x-6">
              <a
                href="https://instagram.com/bajaj_hriday"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors social-icon"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/hridaybajaj019/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors social-icon"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=919559314530"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors social-icon"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {selectedRole ? (
        renderProjects(selectedRole)
      ) : (
        <>
          {currentSection === "home" && renderHome()}
          {currentSection === "bio" && renderBio()}
        </>
      )}
    </div>
  )
}
