import React, { useState } from "react";
import { get_predictions } from "../../utils/axios";

export const Phishtest = () => {
  const [loading, setloading] = useState(false);
  const [fin, setFin] = useState(false);
  const [predict, setPredict] = useState({});

  function handleClick() {
    let data = {
      length_url: [1000],
      length_hostname: [192],
      ip: [3],
      nb_dots: [2],
      nb_hyphens: [1],
      nb_at: [0],
      nb_qm: [1],
      nb_and: [0],
      nb_or: [0],
      nb_eq: [0],
      nb_underscore: [0],
      nb_tilde: [0],
      nb_percent: [0],
      nb_slash: [2],
      nb_star: [0],
      nb_colon: [0],
      nb_comma: [0],
      nb_semicolumn: [0],
      nb_dollar: [0],
      nb_space: [0],
      nb_www: [0],
      nb_com: [0],
      nb_dslash: [0],
      http_in_path: [0],
      https_token: [0],
      ratio_digits_url: [0.2],
      ratio_digits_host: [0.1],
      punycode: [0],
      port: [80],
      tld_in_path: [0],
      tld_in_subdomain: [0],
      abnormal_subdomain: [0],
      nb_subdomains: [2],
      prefix_suffix: [0],
      random_domain: [0],
      shortening_service: [0],
      path_extension: [0],
      nb_redirection: [0],
      nb_external_redirection: [0],
      length_words_raw: [10],
      char_repeat: [0],
      shortest_words_raw: [3],
      shortest_word_host: [3],
      shortest_word_path: [3],
      longest_words_raw: [10],
      longest_word_host: [10],
      longest_word_path: [10],
      avg_words_raw: [5],
      avg_word_host: [5],
      avg_word_path: [5],
      phish_hints: [0],
      domain_in_brand: [0],
      brand_in_subdomain: [0],
      brand_in_path: [0],
      suspecious_tld: [0],
      statistical_report: [0],
      nb_hyperlinks: [10],
      ratio_intHyperlinks: [0.5],
      ratio_extHyperlinks: [0.5],
      ratio_nullHyperlinks: [0],
      nb_extCSS: [5],
      ratio_intRedirection: [0],
      ratio_extRedirection: [0],
      ratio_intErrors: [0],
      ratio_extErrors: [0],
      login_form: [0],
      external_favicon: [0],
      links_in_tags: [5],
      submit_email: [0],
      ratio_intMedia: [0.7],
      ratio_extMedia: [0.3],
      sfh: [0],
      iframe: [0],
      popup_window: [0],
      safe_anchor: [0],
      onmouseover: [0],
      right_clic: [0],
      empty_title: [0],
      domain_in_title: [0],
      domain_with_copyright: [0],
      whois_registered_domain: [0],
      domain_registration_length: [365],
      domain_age: [365],
      web_traffic: [12],
      dns_record: [10],
      google_index: [1],
      page_rank: [5],
    };
    setloading(true);

    get_predictions(data)
      .then((res) => {
        setPredict(res.data);
        console.log(res.data);
        setFin(true);
      })
      .catch((err) => {
        console.log(err);
      });

    setloading(false);
  }
  function get_text(pred) {
    return pred === 0 ? (
      <span className="text-success">Legitimate</span>
    ) : (
      <span className="text-error">Phishing</span>
    );
  }
  return (
    <div className="hero min-h-[88vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="card flex-shrink-0 max-w-4xl shadow-2xl bg-base-100 w-full">
          <div className="card-body ">
            {loading ? (
              <div className="flex items-center justify-center h-96">
                <span class="loading loading-ring loading-lg m-2"></span>
                <span class="loading loading-ring loading-lg m-2"></span>
                <span class="loading loading-ring loading-lg m-2"></span>
                <span class="loading loading-ring loading-lg m-2"></span>
              </div>
            ) : fin ? (
              <div className="flex items-center justify-evenly h-96">
                <div class="stats stats-vertical shadow m-4">
                  <div class="stat">
                    <div class="stat-title">Logistic Regression.</div>
                    <div class="stat-value">{get_text(predict["LR"])}</div>
                  </div>
                  <div class="stat">
                    <div class="stat-title">Decision Tree</div>
                    <div class="stat-value">{get_text(predict["DT"])}</div>
                  </div>
                </div>
                <div class="stats stats-vertical shadow m-4">
                  <div class="stat">
                    <div class="stat-title">K Nearest Neighbour</div>
                    <div class="stat-value">{get_text(predict["KNN"])}</div>
                  </div>
                  <div class="stat">
                    <div class="stat-title">Nural Network</div>
                    <div class="stat-value">{get_text(predict["NN"])}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="form-control">
                <textarea
                  class="textarea textarea-success h-96 text-3xl p-10"
                  placeholder="Paste Link"
                ></textarea>
              </div>
            )}
            <div className="form-control mt-6">
              <div>
                <button
                  className="btn btn-primary w-2/5 m-2"
                  onClick={handleClick}
                >
                  SCAN
                </button>
                <button
                  className="btn btn-outline w-2/5"
                  onClick={() => {
                    setFin(false);
                    setPredict({});
                  }}
                >
                  RESET
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center lg:text-left w-2/4 m-4">
          <h1 className="text-5xl font-bold">Unmask Phishing Websites!!!</h1>
          <p className="py-6">
            Copy and paste the URL into the container below and click 'Scan' to
            check if it's a phishing website. Stay vigilant and protect yourself
            from cyber threats!
          </p>
        </div>
      </div>
    </div>
  );
};
