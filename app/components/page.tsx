import React from "react";
import SeeComponent from "./SeeComponent";
import components from "./components";
import blocks from "./blocks";
import { v4 as uuidv4 } from "uuid";

const componentsPage: React.FC = () => {
  return (
    <main className="flex flex-col gap-20">
      <section className="w-full flex flex-col gap-4">
        <h1>Components</h1>
        <p>
          Discover Astra UI&apos;s powerful components, designed for rapid
          development and customizable, intuitive user interfaces.
        </p>
        <aside className="flex flex-col gap-4">
          {components.map((component) => {
            return (
              <SeeComponent
                preview={component.preview}
                name={component.name}
                desc={component.desc}
                className={`gap-4 bordered p-24 grid place-items-center w-full ${component.className}`}
                link={component.link}
                key={uuidv4()}
              />
            );
          })}
        </aside>
      </section>
      <section className="w-full flex flex-col gap-4">
        <h1>Building Blocks</h1>
        <p>
          Explore Astra UI&apos;s building blocks, including fully integrated
          components like login pages and dashboards.
        </p>
        <aside className="flex flex-col gap-4">
          {blocks.map((block) => {
            return (
              <SeeComponent
                preview={block.preview}
                name={block.name}
                desc={block.desc}
                className={`gap-4 border ${block.className}`}
                link={block.link}
                key={uuidv4()}
              />
            );
          })}
        </aside>
      </section>
    </main>
  );
};

export default componentsPage;
