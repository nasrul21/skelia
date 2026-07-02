import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import {
  CssLogo,
  FlutterLogo,
  ReactNativeLogo,
  ReactLogo,
  SvelteLogo,
  VueLogo,
} from "../components/PackageLogos";

function Preview() {
  return (
    <div className="hero-preview" aria-hidden="true">
      <div className="browser-frame">
        <div className="browser-bar">
          <span className="browser-dot" />
          <span className="browser-dot" />
          <span className="browser-dot" />
        </div>

        <div className="browser-body">
          <div className="preview-grid">
            <div className="preview-column">
              <div className="sk sk-shimmer">
                <div className="sk-stack">
                  <div className="sk-image sk-ratio-21-9" />
                  <div className="sk-line sk-w-70 sk-h-lg" />
                  <div className="sk-line sk-w-100" />
                  <div className="sk-line sk-w-90" />
                  <div className="sk-line sk-w-60" />
                </div>
              </div>

              <div className="sk sk-pulse">
                <div className="sk-row">
                  <div className="sk-avatar" />
                  <div className="sk-stack sk-flex-1 sk-gap-sm">
                    <div className="sk-line sk-w-40" />
                    <div className="sk-line sk-w-80" />
                  </div>
                </div>
              </div>
            </div>

            <div className="preview-column">
              <div className="sk sk-shimmer">
                <div className="sk-stack">
                  <div className="sk-line sk-w-90" />
                  <div className="sk-line sk-w-70" />
                  <div className="sk-line sk-w-50" />
                  <div className="sk-button sk-mt-sm" />
                </div>
              </div>

              <div className="sk sk-wave">
                <div className="sk-grid sk-grid-2">
                  <div className="sk-box sk-h-2xl" />
                  <div className="sk-box sk-h-2xl" />
                  <div className="sk-box sk-h-2xl" />
                  <div className="sk-box sk-h-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureIcon({ type }) {
  if (type === "css") {
    return (
      <svg viewBox="0 0 128 128" aria-hidden="true">
        <path
          fill="currentColor"
          d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z"
        />
      </svg>
    );
  }

  if (type === "framework") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 6.5 12 3l7 3.5v7L12 17l-7-3.5z" />
        <path d="M5 10.5 12 14l7-3.5" />
        <path d="M12 17v4" />
        <path d="M8 21h8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 4 7v10l8 4 8-4V7z" />
      <path d="M8.5 9.5h7" />
      <path d="M8.5 12h7" />
      <path d="M8.5 14.5h4.5" />
    </svg>
  );
}

function Feature({ title, icon, children }) {
  return (
    <article className="feature-card">
      <div className="feature-card__header">
        <span className="feature-card__icon">
          <FeatureIcon type={icon} />
        </span>
        <h2>{title}</h2>
      </div>
      <p>{children}</p>
    </article>
  );
}

function PackageLink({ name, description, icon, to, disabled = false }) {
  const content = (
    <>
      <span className="package-link__icon">{icon}</span>
      <span className="package-link__content">
        <span className="package-link__name">{name}</span>
        <span className="package-link__description">{description}</span>
      </span>
      {!disabled && (
        <span className="package-link__arrow" aria-hidden="true">
          →
        </span>
      )}
      {disabled && <span className="package-link__status">Planned</span>}
    </>
  );

  if (disabled) {
    return (
      <article className="package-link package-link--disabled" aria-disabled="true">
        {content}
      </article>
    );
  }

  return (
    <Link className="package-link" to={to}>
      {content}
    </Link>
  );
}

export default function Home() {
  return (
    <Layout
      title="Skelia"
      description="Cross-framework skeleton loading toolkit"
    >
      <main>
        <div className="container">
          <section className="hero-home" aria-labelledby="hero-title">
            <div>
              <span className="hero-home__eyebrow">
                Cross-framework skeleton loading toolkit
              </span>
              <h1 id="hero-title" className="hero-home__title">
                Skelia
              </h1>
              <p className="hero-home__copy">
                Build polished loading states that feel consistent across
                products, frameworks, and platforms. Start with the lightweight
                CSS core, then use the same loading language as Skelia grows
                into framework and native packages.
              </p>

              <div className="hero-home__actions">
                <Link
                  className={clsx("button", "button--primary")}
                  to="/docs/intro"
                >
                  Get started
                </Link>
                <Link
                  className={clsx("button", "button--secondary")}
                  to="/docs/core/examples"
                >
                  Browse examples
                </Link>
              </div>
            </div>

            <Preview />
          </section>

          <section className="feature-section" aria-labelledby="feature-title">
            <div className="section-header">
              <p className="section-eyebrow">Why Skelia</p>
              <h2 id="feature-title">Built for consistent loading states</h2>
            </div>

            <div className="feature-grid">
              <Feature title="CSS first" icon="css">
                Import one stylesheet and compose accessible placeholders with
                primitives, utilities, and animations.
              </Feature>
              <Feature title="Framework ready" icon="framework">
                Skelia starts with core CSS and is structured to grow into
                idiomatic React, Vue, Svelte, and native packages.
              </Feature>
              <Feature title="Token driven" icon="tokens">
                Customize colors, radius, animation timing, spacing, and borders
                with CSS custom properties.
              </Feature>
            </div>
          </section>

          <section className="package-section" aria-labelledby="package-title">
            <div className="section-header">
              <p className="section-eyebrow">Package docs</p>
              <h2 id="package-title">Choose your package</h2>
              <p>
                Start with the CSS foundation or use a framework component
                layer built on top of the same primitives.
              </p>
            </div>

            <div className="package-link-grid">
              <PackageLink
                name="@skelia/core"
                description="CSS primitives, animations, utilities, and theming."
                icon={<CssLogo />}
                to="/docs/core/installation"
              />
              <PackageLink
                name="@skelia/react"
                description="Typed React components powered by the core CSS system."
                icon={<ReactLogo />}
                to="/docs/react/installation"
              />
              <PackageLink
                name="@skelia/vue"
                description="Typed Vue components powered by the core CSS system."
                icon={<VueLogo />}
                to="/docs/vue/installation"
              />
              <PackageLink
                name="@skelia/svelte"
                description="Planned Svelte components for skeleton composition."
                icon={<SvelteLogo />}
                disabled
              />
              <PackageLink
                name="@skelia/react-native"
                description="Planned React Native primitives for native loading states."
                icon={<ReactNativeLogo />}
                disabled
              />
              <PackageLink
                name="@skelia/flutter"
                description="Planned Flutter widgets for native loading states."
                icon={<FlutterLogo />}
                disabled
              />
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
