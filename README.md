# sellyourstuff-ReadMe


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**SellYourStuff** Is a website that allows users to post items that they don't need or want any more online
to reduce their carbon footprint and reduce waste to landfills. A small donation is given help plant a tree.
<br>

## MVP

### Goals
<br>
_ **Sell your stuff** 
    -The website allows users to see items posted by other users.
    -A registered user can post their item with a picture, description and price which are then visible to other users to see.
    ._
<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _React front end with HTML/CSS.          _ |
|   React Router   | _Navigation between pages                _ |
|       Ruby       | _OOP used for app                        _ |
|     Rails        | _backend webframework                    _ |


<br>

### Client (Front End)

#### Wireframes
> 
- Ui and Wireframes
[wireframework](https://whimsical.com/sellyourstuff-6ELs8YTiwbVeW4PXKGJgyD)


#### Component Tree

- Components
[component tree](https://whimsical.com/P6Uus45rAVBZiyJjp4E7B2)

#### Component Architecture

``` structure

src
|__ screens/
      |__ landing.jsx
      |__ register.jsx
      |__ login.jsx
      |__ main.jsx
      |__ create.jsx
      |__ edit.jsx
      |__ details.jsx
      |__ categories_page.jsx
|__ components/
      |__ cards.jsx
|__ layout/   
|__ services/

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| setup backend repo  |    H     |     1  hrs     |     * hrs     |    * hrs    |
| setup migrations    |    H     |     2  hrs     |     * hrs     |    * hrs    |
| setup models.       |    H     |     2  hrs     |     * hrs     |    * hrs    |
| setup controllers   |    H     |     4  hrs     |     * hrs     |    * hrs    |
| Create frontend repo|    H     |     1  hrs     |     * hrs     |     TBD     |
| Base layout         |    H     |     1  hrs     |     * hrs     |     TBD     |
| Create components   |    H     |     3  hrs     |     * hrs     |     TBD     |
| Create screens      |    H     |     10 hrs     |     * hrs     |     TBD     |
| Style  screens      |    H     |     7  hrs     |     * hrs     |     TBD     |
| Media queries.      |    H     |     5  hrs     |     * hrs     |     TBD     |
| TOTAL               |          |     36 hrs     |     * hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

[erd- link](https://lucid.app/lucidchart/5e74bc95-3bfd-49df-8b5a-5ac36f6c09c6/edit?viewport_loc=-238%2C33%2C1912%2C967%2C0_0&invitationId=inv_90d5284d-146e-4a2f-80f5-695cfcddf28e)
<br>

***

## Post-MVP

> Allow registered users request for purchase item from seller. 
> Allow for question and answer between seller and potential buyers.

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> 
