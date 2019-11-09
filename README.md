# Linkysh

> **This software is under heavy development. Expect many breaking changes.**

![Powered by Loopback 4](https://loopback.io/images/branding/powered-by-loopback/blue/powered-by-loopback-sm.png)

![GitHub](https://img.shields.io/github/license/linkysh/linkysh?style=flat-square)
[![Module LTS Adopted'](https://img.shields.io/badge/Module%20LTS-Adopted-brightgreen.svg?style=flat-square)](http://github.com/CloudNativeJS/ModuleLTS)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg?style=flat-square)](code-of-conduct.md)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/linkysh/linkysh.svg?logo=lgtm&logoWidth=18&style=flat-square)](https://lgtm.com/projects/g/linkysh/linkysh/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/linkysh/linkysh.svg?logo=lgtm&logoWidth=18&style=flat-square)](https://lgtm.com/projects/g/linkysh/linkysh/context:javascript)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Flinkysh%2Flinkysh.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Flinkysh%2Flinkysh?ref=badge_shield)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/3369/badge)](https://bestpractices.coreinfrastructure.org/projects/3369)
![OSS Lifecycle](https://img.shields.io/osslifecycle/linkysh/linkysh?style=flat-square)
[![Renovate](https://img.shields.io/badge/renovate-enabled-green?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNjkgMzY5Ij48Y2lyY2xlIGN4PSIxODkuOSIgY3k9IjE5MC4yIiByPSIxODQuNSIgZmlsbD0iI2ZmZTQyZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUgLTYpIi8+PHBhdGggZmlsbD0iIzhiYjViNSIgZD0iTTI1MSAyNTZsLTM4LTM4YTE3IDE3IDAgMDEwLTI0bDU2LTU2YzItMiAyLTYgMC03bC0yMC0yMWE1IDUgMCAwMC03IDBsLTEzIDEyLTktOCAxMy0xM2ExNyAxNyAwIDAxMjQgMGwyMSAyMWM3IDcgNyAxNyAwIDI0bC01NiA1N2E1IDUgMCAwMDAgN2wzOCAzOHoiLz48cGF0aCBmaWxsPSIjZDk1NjEyIiBkPSJNMzAwIDI4OGwtOCA4Yy00IDQtMTEgNC0xNiAwbC00Ni00NmMtNS01LTUtMTIgMC0xNmw4LThjNC00IDExLTQgMTUgMGw0NyA0N2M0IDQgNCAxMSAwIDE1eiIvPjxwYXRoIGZpbGw9IiMyNGJmYmUiIGQ9Ik04MSAxODVsMTgtMTggMTggMTgtMTggMTh6Ii8+PHBhdGggZmlsbD0iIzI1YzRjMyIgZD0iTTIyMCAxMDBsMjMgMjNjNCA0IDQgMTEgMCAxNkwxNDIgMjQwYy00IDQtMTEgNC0xNSAwbC0yNC0yNGMtNC00LTQtMTEgMC0xNWwxMDEtMTAxYzUtNSAxMi01IDE2IDB6Ii8+PHBhdGggZmlsbD0iIzFkZGVkZCIgZD0iTTk5IDE2N2wxOC0xOCAxOCAxOC0xOCAxOHoiLz48cGF0aCBmaWxsPSIjMDBhZmIzIiBkPSJNMjMwIDExMGwxMyAxM2M0IDQgNCAxMSAwIDE2TDE0MiAyNDBjLTQgNC0xMSA0LTE1IDBsLTEzLTEzYzQgNCAxMSA0IDE1IDBsMTAxLTEwMWM1LTUgNS0xMSAwLTE2eiIvPjxwYXRoIGZpbGw9IiMyNGJmYmUiIGQ9Ik0xMTYgMTQ5bDE4LTE4IDE4IDE4LTE4IDE4eiIvPjxwYXRoIGZpbGw9IiMxZGRlZGQiIGQ9Ik0xMzQgMTMxbDE4LTE4IDE4IDE4LTE4IDE4eiIvPjxwYXRoIGZpbGw9IiMxYmNmY2UiIGQ9Ik0xNTIgMTEzbDE4LTE4IDE4IDE4LTE4IDE4eiIvPjxwYXRoIGZpbGw9IiMyNGJmYmUiIGQ9Ik0xNzAgOTVsMTgtMTggMTggMTgtMTggMTh6Ii8+PHBhdGggZmlsbD0iIzFiY2ZjZSIgZD0iTTYzIDE2N2wxOC0xOCAxOCAxOC0xOCAxOHpNOTggMTMxbDE4LTE4IDE4IDE4LTE4IDE4eiIvPjxwYXRoIGZpbGw9IiMzNGVkZWIiIGQ9Ik0xMzQgOTVsMTgtMTggMTggMTgtMTggMTh6Ii8+PHBhdGggZmlsbD0iIzFiY2ZjZSIgZD0iTTE1MyA3OGwxOC0xOCAxOCAxOC0xOCAxOHoiLz48cGF0aCBmaWxsPSIjMzRlZGViIiBkPSJNODAgMTEzbDE4LTE3IDE4IDE3LTE4IDE4ek0xMzUgNjBsMTgtMTggMTggMTgtMTggMTh6Ii8+PHBhdGggZmlsbD0iIzk4ZWRlYiIgZD0iTTI3IDEzMWwxOC0xOCAxOCAxOC0xOCAxOHoiLz48cGF0aCBmaWxsPSIjYjUzZTAyIiBkPSJNMjg1IDI1OGw3IDdjNCA0IDQgMTEgMCAxNWwtOCA4Yy00IDQtMTEgNC0xNiAwbC02LTdjNCA1IDExIDUgMTUgMGw4LTdjNC01IDQtMTIgMC0xNnoiLz48cGF0aCBmaWxsPSIjOThlZGViIiBkPSJNODEgNzhsMTgtMTggMTggMTgtMTggMTh6Ii8+PHBhdGggZmlsbD0iIzAwYTNhMiIgZD0iTTIzNSAxMTVsOCA4YzQgNCA0IDExIDAgMTZMMTQyIDI0MGMtNCA0LTExIDQtMTUgMGwtOS05YzUgNSAxMiA1IDE2IDBsMTAxLTEwMWM0LTQgNC0xMSAwLTE1eiIvPjxwYXRoIGZpbGw9IiMzOWQ5ZDgiIGQ9Ik0yMjggMTA4bC04LThjLTQtNS0xMS01LTE2IDBMMTAzIDIwMWMtNCA0LTQgMTEgMCAxNWw4IDhjLTQtNC00LTExIDAtMTVsMTAxLTEwMWM1LTQgMTItNCAxNiAweiIvPjxwYXRoIGZpbGw9IiNhMzM5MDQiIGQ9Ik0yOTEgMjY0bDggOGM0IDQgNCAxMSAwIDE2bC04IDdjLTQgNS0xMSA1LTE1IDBsLTktOGM1IDUgMTIgNSAxNiAwbDgtOGM0LTQgNC0xMSAwLTE1eiIvPjxwYXRoIGZpbGw9IiNlYjZlMmQiIGQ9Ik0yNjAgMjMzbC00LTRjLTYtNi0xNy02LTIzIDAtNyA3LTcgMTcgMCAyNGw0IDRjLTQtNS00LTExIDAtMTZsOC04YzQtNCAxMS00IDE1IDB6Ii8+PHBhdGggZmlsbD0iIzEzYWNiZCIgZD0iTTEzNCAyNDhjLTQgMC04LTItMTEtNWwtMjMtMjNhMTYgMTYgMCAwMTAtMjNMMjAxIDk2YTE2IDE2IDAgMDEyMiAwbDI0IDI0YzYgNiA2IDE2IDAgMjJMMTQ2IDI0M2MtMyAzLTcgNS0xMiA1em03OC0xNDdsLTQgMi0xMDEgMTAxYTYgNiAwIDAwMCA5bDIzIDIzYTYgNiAwIDAwOSAwbDEwMS0xMDFhNiA2IDAgMDAwLTlsLTI0LTIzLTQtMnoiLz48cGF0aCBmaWxsPSIjYmY0NDA0IiBkPSJNMjg0IDMwNGMtNCAwLTgtMS0xMS00bC00Ny00N2MtNi02LTYtMTYgMC0yMmw4LThjNi02IDE2LTYgMjIgMGw0NyA0NmM2IDcgNiAxNyAwIDIzbC04IDhjLTMgMy03IDQtMTEgNHptLTM5LTc2Yy0xIDAtMyAwLTQgMmwtOCA3Yy0yIDMtMiA3IDAgOWw0NyA0N2E2IDYgMCAwMDkgMGw3LThjMy0yIDMtNiAwLTlsLTQ2LTQ2Yy0yLTItMy0yLTUtMnoiLz48L3N2Zz4=)](https://renovatebot.com)
[![Prettier](https://img.shields.io/badge/code_style-Prettier-ff69b4.svg?logo=Prettier&logoColor=white&style=flat-square 'Prettier')](https://github.com/prettier/prettier)

| Package        | Vulnerabilities | Dependencies |
|----------------|-----------------|--------------|
| admin-frontend | [![Known Vulnerabilities](https://snyk.io/test/github/linkysh/linkysh/badge.svg?targetFile=packages/admin-frontend/package.json&style=flat-square)](https://snyk.io/test/github/linkysh/linkysh?targetFile=packages/admin-frontend/package.json) | [![dependencies Status](https://david-dm.org/linkysh/linkysh/status.svg?path=packages/core)](https://david-dm.org/linkysh/linkysh?path=packages/core) |
| core           | [![Known Vulnerabilities](https://snyk.io/test/github/linkysh/linkysh/badge.svg?targetFile=packages/admin-frontend/package.json&style=flat-square)](https://snyk.io/test/github/linkysh/linkysh?targetFile=packages/core/package.json) | [![dependencies Status](https://david-dm.org/linkysh/linkysh/status.svg?path=packages/admin-frontend)](https://david-dm.org/linkysh/linkysh?path=packages/admin-frontend) |

Linkysh is a free & open-source URL shortener. It's main goals are mainly:

* Extensibility through extension points
* Easy on-prem deployment
* Fine-grained UAA control
* Freely-licensed with Apache 2.0
* User action auditability
* Broad SSO support
* Short-link analytics

## Module Long Term Support Policy

> While this table is included, it is not necessary relevant as Linkysh is still alpha.

This module adopts the [Module Long Term Support (LTS)](http://github.com/CloudNativeJS/ModuleLTS) policy, with the following End Of Life (EOL) dates:

| Module Version   | Release Date | Minimum EOL | EOL With     | Status  |
|------------------|--------------|-------------|--------------|---------|
| 0.x.x	           | Oct 2019     | Apr 2021    | Node 10      | Alpha   |

## Contributors

* [Rifa Achrinza](https://github.com/achrinza) (Main contributor)


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Flinkysh%2Flinkysh.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Flinkysh%2Flinkysh?ref=badge_large)
