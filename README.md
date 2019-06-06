# Angular 7 Course Content

### Sample Projects

1. **Todos App**

    Todos is a simple app built on Angular 7. It works with a REST API written in NodeJS and MongoDB. It contains the features like todos list, search todos, add-edit and delete todo(A complete CRUD on todo). Todos app helps us to understand Angular app Architecture. We start learning Angular Framework with this app. By end of this app, we will get practical exposure to angular concepts like Modules, Components, Services, Observables etc... You can find the code in github repo.

2. **Angular Fundamentals Application**

    Angular Fundamentals application contains example programs for every concept in Angular. The example programs help us to understand the angular concepts in-depth. Throughout this course we refer different parts of this app. You can find the code in github repo.

3. **Simplekart**

    At the end of this course we start building this application. Simplekart is an Ecommerce application implemented in Angular 7. It works with a REST API written in NodeJS and MongoDB. It contains the features like Sign up, Sign in, Authentication, User Role Management, Search and Sort records, Pagination etc... It covers many other realtime scenarios. You can find the code in github repo.

Interview Questions

    All important interview questions are listed and shared through github. We will discuss each and every question thoroughly with code examples.


As part of this course, we will also cover Basics of below.
    - Node Package Manager(npm)
    - REST API Concepts
    - Chrome Dev Tools
    - Webpack
    - GIT
    - Visual Studio Code (Angular IDE)
    - Swagger and Postman Tool

### Detailed List of Concepts

1. **JavaScript Basics**

    - Variables
    - Datatypes
    - typeof operator
    - Numbers
        - NaN
        - isNaN
        - parseInt
        - parseFloat
        - Math.floor
        - Math.ceil
        - Math.round
        - Math.random
        - toFixed
    - Strings
        - length
        - charAt
        - toUpperCase
        - toLowerCase
        - indexOf
        - substring
        - substr
        - slice
    - Type Conversions
        - To string
        - To number
        - To boolean
        - JSON.parse
        - JSON.stringify
    - Operators and Loops
    - Functions
        - Named function
        - Anonymous function
        - Callback function
        - Self invoked function
        - Constructor function
    - Instanceof operator
    - Arrays
        - new Array()
        - length
        - pop
        - push
        - shift
        - unshift
        - join
        - split
        - delete
        - splice
        - forEach
        - map
        - filter
        - reverse
        - sort
    - Objects
        - Object creation
        - Object.keys()
        - Object.values()
    - JSON
    - Window Object
    - 'this' keyword
    - call, apply and bind methods
    - Prototypal inheritance
    - Closures
    - Document Object Model (DOM)
    - Document Traversing
        - document.getElementById
        - getElementsByTagName
        - getElementsByClassName
        - getElementsByName
        - querySelector
        - querySelectorAll
    - Element Attribute VS Element Property
    - Events
        - Handle events with element attribute
        - Handle events with DOM-object property
        - Handle events using addEventListener
        - Keyboard events, Mouse events, window events
        - event.preventDefault()
        - event.stopPropagation()
    - AJAX
        - XMLHttpRequest
    - localStorage
        - setItem()
        - getItem()
        - removeItem()
    - Exceptions and Error handling
    - Regular Expression methods
    - Timing Functions
        - setTimeout
        - clearTimeOut
        - setInterval
        - clearInterval
    - Node Package Manager(NPM)

2. **JavaScript ES6 Features**

    - let
        - var vs let
        - Hoisting concept
        - Block level scoping
    - const
        - Block level scoping
        - Reference change VS Value change
    - Destructuring
        - Array destructuring
        - Object destructuring
        - Destructuring in function params
    - Default parameters
    - REST parameters
    - Spread operator
    - Template Literals
    - Arrow Functions
    - Classes
        - Getters and Setters
        - Inheretance
        - Super keyword
        - Overrides
    - Modules
    - Object Enhancements
    - Array Enhancements

3. **Typescript**

    - Installation
    - Data Types
        - Boolean
        - Number
        - String
        - Array
        - Tuple
        - Enum
        - Any
        - Void
        - Null and Undefined
        - Never
    - Type assertions / Type casting
        - angle-bracket syntax
        - as syntax
    - Union Data Types
    - Interfaces
        - About Interfaces
        - Optional Properties
        - Readonly properties
        - readonly vs const
        - Function Interfaces
        - Class Interfaces
        - Interface extendign Interface
        - Interfaces Extending Classes
    - Classes
        - Inheritance
        - super keyword
        - Public, private, and protected modifiers
        - Parameter properties
        - Accessors (getters/setters)
        - Static Properties
        - Abstract Classes
    - Functions
        - Function type
        - Optional and Default Parameters
        - Rest Parameters
    - Generics
    - Type Inference
    - Modules
    - tsconfig.json File
    - Decorators
        - Applying Decorator
        - Class Decorators
        - Method Decorators
        - Accessor Decorators
        - Property Decorators
    - HTML5 Web APIs in TypeScript
    - Using JavaScript libraries in TypeScript(@types / typings)
    - Confusing Syntaxes - All at one place

4. **Angular Framework**

    - Angular CLI introduction
        - Install Angular CLI
        - setup new Angular application
        - run Angular application
    - Folder Structure of Angular application
    - Angular app Architecture
    - Components & Templates
        - Displaying component data in templates
        - Interpolation binding
        - Property Binding
        - Property binding VS interpolation binding
        - Attribute, class, and style bindings
        - Event binding
        - Custom events with EventEmitter
        - @Input and @Output properties
        - Two-way binding [(...)]
        - NgModel Directive
        - Template expressions
        - Template Expression Operators
        - Template statements
        - Template input variables (let hero)
        - Template reference variables ( #hero )
    - Directives
        - Components
        - Structural directives
            - create custom structural directive
            - *ngIf - show-hide OR add-remove
            - *ngFor - with trackBy
        - Attribute directives
            - create custom Attribute directive
        - ng-template
        - ng-container
    - Component Interaction
        - Pass data from parent to child with @input binding
        - Parent listens for child event - @output
        - Parent interacts with child via local variable (template reference variable)
        - Using @ViewChild()
        - Using @ContentChild()
        - Communicate via a Service
    - Component Lifecycle Hooks
        - ngOnChanges
        - ngOnInit
        - ngDoCheck
        - ngAfterContentInit
        - ngAfterContentChecked
        - ngAfterViewInit
        - ngAfterViewChecked
        - ngOnDestroy
    - HostListener & HostBinding
    - Component Styles
        - host selector
        - host-context selector
        - /deep/ and ::ng-deep selectors
    - Pipes
        - Pure Pipes
        - Impure Pipes
        - Async Pipe
    - Bootstrapping
    - Observables & RxJS
        - Reactive programming
        - Observable
        - Observable creation methods
        - Subscribe method
        - Unsubscribe method
        - Observable VS Subject
        - Types of Subjects
        - Operators
        - Pipe() method
        - Marble Diagrams
    - Dependency Injection(DI)
        - Why dependency injection?
        - Angular Dependency Injection
        - @Injectable providers
        - @NgModule providers
        - @Component providers
        - Injector bubbling
        - forRoot() method
        - CoreModule
        - Tree-shakable providers
    - NgModules
        - BrowserModule and CommonModule
        - Entry Components
        - SharedModule
    - Reactive Forms
        - FormControl
        - FormGroup
        - FormBuilder
        - FormArray
    - Template-driven Forms
    - Form Validations
        - Reactive forms validation
        - Template-driven forms validation
        - write custom validatiors
    - REST API concepts
    - HttpClient
        - get, post, put and delete methods
        - Adding Headers to request
        - Query Parameters
        - HTTP interceptors
    - Routing & Navigation
        - Configuring routes
        - 'data' Property in route
        - Default and Wildcard paths
        - Router outlet
        - Router link
        - RouterLinkActive
        - Activated route
        - Router events
        - Child Routing
        - Route Guards
    - Angular CLI Commands

