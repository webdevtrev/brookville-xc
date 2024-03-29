import "./licenses.scss";
import allData from "./licenses.json";
import { Helmet } from "react-helmet";
import { extractNameFromGithubUrl } from "./utils/extractNameFromGithubUrl/extractNameFromGithubUrl";

function Licenses() {
  let licenses = Object.keys(allData).map((key) => {
    let { licenses, ...license } = allData[key];
    let name, version;
    if (key[0] === "@") {
      [, name, version] = key.split("@");
    } else {
      [name, version] = key.split("@");
    }

    let username =
      extractNameFromGithubUrl(license.repository) ||
      extractNameFromGithubUrl(license.licenseUrl);

    let userUrl;
    let image;
    if (username) {
      // username = username;
      image = `http://github.com/${username}.png`;
      userUrl = `http://github.com/${username}`;
    }

    return {
      key,
      name,
      image,
      userUrl,
      username,
      licenses: licenses.slice(0, 405),
      version,
      ...license,
    };
  });
  return (
    <div className="Licenses">
      <Helmet>
        <title>Licenses</title>
      </Helmet>
      {licenses.map(
        (
          {
            image,
            userUrl,
            username,
            name,
            version,
            licenses,
            repository,
            licenseUrl,
          },
          index
        ) => {
          let title = name;
          if (username) {
            if (title.toLowerCase() !== username.toLowerCase()) {
              title += ` by ${
                username.charAt(0).toUpperCase() + username.substring(1)
              }`;
            }
          }
          return (
            <div className="LicensesListItem" key={index}>
              <div className="cardShadow">
                <div className="card">
                  {image && (
                    <a href={userUrl}>
                      <img src={image} className="image" alt={title} />
                    </a>
                  )}
                  <a href={repository} className="item">
                    <div>
                      <div className="name">{title}</div>
                      <div className="text">{version}</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

export default Licenses;
