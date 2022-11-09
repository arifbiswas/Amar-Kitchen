import React from "react";

const Blogs = () => {
  return (
    <div>
      <section class="bg-white">
        <div class="container px-6 py-12 mx-auto">
          <h1 class="text-2xl font-semibold text-gray-900 lg:text-4xl ">
            Assignment questions.
          </h1>

          <div class="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {/* card */}
            <div>
              <div class="inline-block p-3 text-white bg-yellow-400 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div>
                <h1 class="text-xl font-semibold text-gray-900 ">
                  Difference between SQL and NoSQL?
                </h1>

                <p class="mt-2 text-sm text-gray-900 dark:text-gray-900">
                  SQL vs NoSQL: Five Main Differences SQL is the programming
                  language used to interface with relational databases.
                  (Relational databases model data as records in rows and tables
                  with logical links between them). NoSQL is a class of DBMs
                  that are non-relational and generally do not use SQL. There
                  are five practical differences between SQL and NoSQL:
                  1.Language <br />
                  2.Scalability <br />
                  3.Structure <br />
                  4.Properties <br />
                  5.Support and communities <br />
                </p>
              </div>
            </div>
            {/* card */}
            <div>
              <div class="inline-block p-3 text-white bg-yellow-400 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div>
                <h1 class="text-xl font-semibold text-gray-900 ">
                  What is JWT, and how does it work?
                </h1>

                <p class="mt-2 text-sm text-gray-900 dark:text-gray-900">
                  JSON Web Token (JWT) is an open standard (RFC 7519) for
                  securely transmitting information between parties as JSON
                  object. It is compact, readable and digitally signed using a
                  private key/ or a public key pair by the Identity
                  Provider(IdP)
                </p>
              </div>
            </div>
           

            {/* card */}
            <div>
              <div class="inline-block p-3 text-white bg-yellow-400 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div>
                <h1 class="text-xl font-semibold text-gray-900 ">
                How does NodeJS handle multiple requests at the same time?
                </h1>

                <p class="mt-2 text-sm text-gray-900 dark:text-gray-900">
                 NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                </p>
              </div>
            </div>

                     {/* card */}
            <div>
              <div class="inline-block p-3 text-white bg-yellow-400 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div>
                <h1 class="text-xl font-semibold text-gray-900">
                  What is the difference between javascript and NodeJS?
                </h1>

                <p class="mt-2 text-sm text-gray-900 dark:text-gray-900">
                  1. JavaScript is a client-side scripting language that is
                  lightweight, cross-platform, and interpreted. Both Java and
                  HTML include it. Node.js, on the other hand, is a V8-based
                  server-side programming language. As a result, it is used to
                  create network-centric applications. It's a networked system
                  made for data-intensive real-time applications. If we compare
                  node js vs. python, it is clear that node js will always be
                  the preferred option. 2. JavaScript is a simple programming
                  language that can be used with any browser that has the
                  JavaScript Engine installed. Node.js, on the other hand, is an
                  interpreter or execution environment for the JavaScript
                  programming language. It requires libraries that can be
                  conveniently accessed from JavaScript programming to be more
                  helpful. 3. Any engine may run JavaScript. As a result,
                  writing JavaScript is incredibly easy, and any working
                  environment is similar to a complete browser. Node.js, on the
                  other hand, only enables the V8 engine. Written JavaScript
                  code, on the other hand, can run in any context, regardless of
                  whether the V8 engine is supported. 4. A specific non-blocking
                  operation is required to access any operating system. There
                  are a few essential objects in JavaScript, but they are
                  entirely OS-specific. Node.js, on the other hand, can now
                  operate non-blocking software tasks out of any JavaScript
                  programming. It contains no OS-specific constants. Node.js
                  establishes a strong relationship with the system files,
                  allowing companies to read and write to the hard drive. 5. The
                  critical benefits of JavaScript include a wide choice of
                  interfaces and interactions and just the proper amount of
                  server contact and direct visitor input. Node.js, on the other
                  hand, offers node package management with over 500 modules and
                  the capacity to handle many requests at the same time. It also
                  offers the unique ability to enable microservice architecture
                  and the Internet of Things. Even when comparing node js vs.
                  react js, node js always wins.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
