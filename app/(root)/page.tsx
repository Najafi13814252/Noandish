import { CardSliderProvider } from "@/context/card-slider-context";
import Hero from "./_components/hero";
import SectionHeader from "./_components/section-header";
import { Suspense } from "react";
import PopularCourses from "./_components/popular-courses";

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-20">
      <Hero />

      <CardSliderProvider>
        <SectionHeader title='محبوب'>
          <Suspense fallback={<p>Loading...</p>}>
            <PopularCourses />
          </Suspense>
        </SectionHeader>
      </CardSliderProvider>
    </div>
  );
}
