
import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-6">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">🧠 Dakshita Vairagi</h1>
        <p className="text-xl">AI Portfolio Website | DigiBuddy, Pet Website & Gallery</p>
        <Button className="mt-4" variant="secondary">
          <a href="/Dakshita_Vairagi_CV.pdf" download>Download Resume</a>
        </Button>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">🧒 DigiBuddy Chatbot</h2>
            <p>Digital literacy bot for beginners with voice I/O and motivational output.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">🐾 Pet-Friendly City</h2>
            <p>Website for pet adoption with carousel, chatbot & impact stories.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">🏫 College Gallery</h2>
            <p>Modern image gallery for campus events using HTML/CSS/JS.</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
