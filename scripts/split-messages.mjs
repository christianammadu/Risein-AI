import {
  mkdir,
  readFile,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const locales = ["en", "et", "ru"];

const projectRoot = process.cwd();
const messagesDirectory = path.join(
  projectRoot,
  "messages"
);

async function readJson(filePath) {
  const fileContent = await readFile(
    filePath,
    "utf8"
  );

  return JSON.parse(fileContent);
}

async function writeJson(filePath, value) {
  await writeFile(
    filePath,
    `${JSON.stringify(value, null, 2)}\n`,
    "utf8"
  );
}

async function splitLocaleMessages(locale) {
  const sourceFile = path.join(
    messagesDirectory,
    `${locale}.json`
  );

  const destinationDirectory = path.join(
    messagesDirectory,
    locale
  );

  const existingMessages =
    await readJson(sourceFile);

  const commonMessages = {
    LocaleSwitcher:
      existingMessages.LocaleSwitcher ?? {},
    Navigation:
      existingMessages.Navigation ?? {},
    Footer: existingMessages.Footer ?? {},
  };

  const serviceMessages = {
    ServicesPage:
      existingMessages.ServicesPage ?? {},
  };

  if (
    Object.keys(serviceMessages.ServicesPage)
      .length === 0
  ) {
    throw new Error(
      `ServicesPage translations are missing from messages/${locale}.json`
    );
  }

  await mkdir(destinationDirectory, {
    recursive: true,
  });

  await writeJson(
    path.join(
      destinationDirectory,
      "common.json"
    ),
    commonMessages
  );

  await writeJson(
    path.join(
      destinationDirectory,
      "services.json"
    ),
    serviceMessages
  );

  console.log(
    `Created modular message files for ${locale}`
  );
}

async function main() {
  for (const locale of locales) {
    await splitLocaleMessages(locale);
  }

  console.log("");
  console.log(
    "Translation files were split successfully."
  );
  console.log(
    "You can now delete messages/en.json messages/et.json and messages/ru.json."
  );
}

main().catch((error) => {
  console.error("");
  console.error(
    "Translation splitting failed:"
  );
  console.error(error);

  process.exitCode = 1;
});