# Software Requirements Specification (SRS)
## Mukhbitah - Hijab Gallery Platform

**Version:** 1.0  
**Date:** April 2, 2026  
**Prepared by:** Development Team  
**Project:** Mukhbitah Hijab Gallery Website

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Overall Description](#2-overall-description)
3. [System Features](#3-system-features)
4. [External Interface Requirements](#4-external-interface-requirements)
5. [Non-Functional Requirements](#5-non-functional-requirements)
6. [Other Requirements](#6-other-requirements)

---

## 1. Introduction

### 1.1 Purpose
This Software Requirements Specification (SRS) document provides a complete description of the Mukhbitah hijab gallery platform. It describes the functional and non-functional requirements for the system that will be used to showcase premium hijab products online.

### 1.2 Scope
**Product Name:** Mukhbitah - "Elegance in Every Layer"

**Product Description:**
Mukhbitah is a modern gallery website for a premium hijab brand. The system will provide:
- Product catalog with 3D visualization
- Shopping cart and checkout functionality
- User account management
- AI-powered product recommendations
- Admin dashboard for product and order management
- Payment gateway integration

**Benefits:**
- Streamlined online shopping experience for hijab products
- Enhanced product visualization through 3D models
- Personalized shopping recommendations
- Efficient order and inventory management

### 1.3 Definitions, Acronyms, and Abbreviations

| Term | Definition |
|------|------------|
| SRS | Software Requirements Specification |
| UI | User Interface |
| UX | User Experience |
| API | Application Programming Interface |
| CRUD | Create, Read, Update, Delete |
| 3D | Three-Dimensional |
| AI | Artificial Intelligence |
| PWA | Progressive Web Application |
| SEO | Search Engine Optimization |

### 1.4 References
- Next.js Documentation: https://nextjs.org/docs
- React Documentation: https://react.dev
- Tailwind CSS Documentation: https://tailwindcss.com
- Three.js Documentation: https://threejs.org
- Midtrans Payment Gateway: https://midtrans.com

### 1.5 Overview
This document is organized into six main sections:
- Introduction (current section)
- Overall Description
- System Features
- External Interface Requirements
- Non-Functional Requirements
- Other Requirements

---

## 2. Overall Description

### 2.1 Product Perspective
Mukhbitah is a standalone gallery web application that will integrate with:
- Payment gateways (Midtrans, Stripe)
- Email service providers
- Cloud storage (Firebase/Supabase)
- Social media platforms (Instagram)
- Analytics services (Google Analytics)

### 2.2 Product Functions
The main functions of the system include:

1. **Product Management**
   - Browse products by category
   - Search and filter products
   - View product details with 3D models
   - View product reviews and ratings

2. **Shopping Cart**
   - Add/remove items
   - Update quantities
   - Calculate totals with shipping

3. **User Management**
   - User registration and authentication
   - Profile management
   - Order history
   - Wishlist management

4. **Checkout Process**
   - Shipping address management
   - Payment processing
   - Order confirmation

5. **Admin Functions**
   - Product CRUD operations
   - Order management
   - Customer management
   - Analytics and reporting

6. **AI Assistant**
   - Product recommendations
   - Style suggestions
   - Customer support chatbot

### 2.3 User Classes and Characteristics

#### 2.3.1 Guest Users
- **Description:** Visitors who browse without creating an account
- **Technical Expertise:** Basic web browsing skills
- **Frequency of Use:** Occasional
- **Functions:** Browse products, view details, add to cart

#### 2.3.2 Registered Customers
- **Description:** Users with accounts who can make purchases
- **Technical Expertise:** Basic to intermediate
- **Frequency of Use:** Regular
- **Functions:** All guest functions plus checkout, order tracking, wishlist

#### 2.3.3 Administrators
- **Description:** Staff managing the platform
- **Technical Expertise:** Intermediate to advanced
- **Frequency of Use:** Daily
- **Functions:** Product management, order processing, analytics

### 2.4 Operating Environment
- **Client-side:** Modern web browsers (Chrome, Firefox, Safari, Edge)
- **Server-side:** Node.js runtime environment
- **Database:** Firebase Firestore or Supabase PostgreSQL
- **Hosting:** Vercel or similar cloud platform
- **Mobile:** Responsive design for iOS and Android browsers

### 2.5 Design and Implementation Constraints
- Must use Next.js 15+ with App Router
- Must be responsive (mobile-first design)
- Must support modern browsers (last 2 versions)
- Must comply with Indonesian gallery and showcase regulations
- Must integrate with Indonesian payment gateways
- Must load within 3 seconds on 4G connection

### 2.6 Assumptions and Dependencies
**Assumptions:**
- Users have internet connectivity
- Users have modern web browsers
- Payment gateways are operational
- Third-party services (email, storage) are available

**Dependencies:**
- Next.js framework
- React library
- Tailwind CSS
- Firebase/Supabase services
- Payment gateway APIs
- Email service provider

---

## 3. System Features

### 3.1 Product Catalog

#### 3.1.1 Description
Users can browse, search, and filter the product catalog.

#### 3.1.2 Priority
High

#### 3.1.3 Functional Requirements

**REQ-3.1.1:** The system shall display products in a grid layout with images, names, prices, and ratings.

**REQ-3.1.2:** The system shall allow users to filter products by:
- Category (Pashmina, Segi Empat, Instan)
- Price range
- Color
- Material
- Rating
- Availability

**REQ-3.1.3:** The system shall provide a search function that searches by:
- Product name
- Description
- Category
- Material

**REQ-3.1.4:** The system shall allow sorting by:
- Price (low to high, high to low)
- Popularity
- Newest arrivals
- Rating

**REQ-3.1.5:** The system shall display product details including:
- Multiple product images
- 3D model viewer
- Description
- Price and discounts
- Available colors
- Material information
- Size guide
- Care instructions
- Customer reviews
- Related products

### 3.2 Shopping Cart

#### 3.2.1 Description
Users can manage items they intend to purchase.

#### 3.2.2 Priority
High

#### 3.2.3 Functional Requirements

**REQ-3.2.1:** The system shall allow users to add products to cart with selected color and quantity.

**REQ-3.2.2:** The system shall allow users to update item quantities in the cart.

**REQ-3.2.3:** The system shall allow users to remove items from the cart.

**REQ-3.2.4:** The system shall display cart summary with:
- Item list with images and details
- Subtotal
- Shipping cost
- Discount (if applicable)
- Total amount

**REQ-3.2.5:** The system shall persist cart data for registered users across sessions.

**REQ-3.2.6:** The system shall display free shipping threshold indicator (minimum Rp 200,000).

**REQ-3.2.7:** The system shall show cart item count badge on navigation bar.

### 3.3 User Authentication

#### 3.3.1 Description
Users can create accounts and authenticate to access personalized features.

#### 3.3.2 Priority
High

#### 3.3.3 Functional Requirements

**REQ-3.3.1:** The system shall allow users to register with:
- Email and password
- Google account
- Facebook account

**REQ-3.3.2:** The system shall validate email format and password strength (minimum 8 characters, 1 uppercase, 1 number).

**REQ-3.3.3:** The system shall send email verification after registration.

**REQ-3.3.4:** The system shall allow users to login with email/password or social accounts.

**REQ-3.3.5:** The system shall provide password reset functionality via email.

**REQ-3.3.6:** The system shall maintain user session for 30 days with "Remember Me" option.

**REQ-3.3.7:** The system shall allow users to logout from all devices.

### 3.4 Checkout Process

#### 3.4.1 Description
Users can complete purchases through a multi-step checkout process.

#### 3.4.2 Priority
High

#### 3.4.3 Functional Requirements

**REQ-3.4.1:** The system shall require user authentication before checkout.

**REQ-3.4.2:** The system shall collect shipping information:
- Full name
- Phone number
- Complete address
- Province, City, District, Postal code
- Address notes (optional)

**REQ-3.4.3:** The system shall allow users to save multiple shipping addresses.

**REQ-3.4.4:** The system shall provide shipping method options with estimated delivery time and cost.

**REQ-3.4.5:** The system shall integrate with payment gateways:
- Midtrans (credit card, bank transfer, e-wallets)
- Stripe (international payments)

**REQ-3.4.6:** The system shall display order summary before payment.

**REQ-3.4.7:** The system shall send order confirmation email after successful payment.

**REQ-3.4.8:** The system shall generate unique order number for each transaction.

### 3.5 User Profile

#### 3.5.1 Description
Registered users can manage their profile and view order history.

#### 3.5.2 Priority
Medium

#### 3.5.3 Functional Requirements

**REQ-3.5.1:** The system shall allow users to update profile information:
- Name
- Email
- Phone number
- Profile picture

**REQ-3.5.2:** The system shall display order history with:
- Order number
- Date
- Status
- Total amount
- Items ordered

**REQ-3.5.3:** The system shall allow users to track order status.

**REQ-3.5.4:** The system shall allow users to manage saved addresses.

**REQ-3.5.5:** The system shall allow users to manage wishlist items.

**REQ-3.5.6:** The system shall allow users to change password.

### 3.6 3D Product Visualization

#### 3.6.1 Description
Users can view products in 3D with interactive controls.

#### 3.6.2 Priority
Medium

#### 3.6.3 Functional Requirements

**REQ-3.6.1:** The system shall display 3D models of products using Three.js.

**REQ-3.6.2:** The system shall allow users to rotate 3D models with mouse/touch.

**REQ-3.6.3:** The system shall allow users to zoom in/out on 3D models.

**REQ-3.6.4:** The system shall allow users to switch colors in 3D view.

**REQ-3.6.5:** The system shall provide realistic lighting and shadows on 3D models.

**REQ-3.6.6:** The system shall optimize 3D model loading for performance.

### 3.7 AI Assistant

#### 3.7.1 Description
AI-powered chatbot provides product recommendations and customer support.

#### 3.7.2 Priority
Low

#### 3.7.3 Functional Requirements

**REQ-3.7.1:** The system shall provide a chatbot interface accessible from all pages.

**REQ-3.7.2:** The system shall recommend products based on:
- User's skin tone
- Outfit color
- Occasion (formal/casual)
- Face shape

**REQ-3.7.3:** The system shall answer common questions about:
- Products
- Shipping
- Returns
- Care instructions

**REQ-3.7.4:** The system shall provide style suggestions based on user preferences.

**REQ-3.7.5:** The system shall escalate complex queries to human support.

### 3.8 Admin Dashboard

#### 3.8.1 Description
Administrators can manage products, orders, and customers.

#### 3.8.2 Priority
High

#### 3.8.3 Functional Requirements

**REQ-3.8.1:** The system shall provide admin authentication separate from customer accounts.

**REQ-3.8.2:** The system shall allow admins to perform CRUD operations on products:
- Add new products with details and images
- Edit product information
- Delete products
- Upload 3D models

**REQ-3.8.3:** The system shall allow admins to manage orders:
- View all orders
- Update order status
- Process refunds
- Print invoices

**REQ-3.8.4:** The system shall allow admins to view customer information.

**REQ-3.8.5:** The system shall provide analytics dashboard with:
- Sales statistics
- Popular products
- Customer demographics
- Revenue reports

**REQ-3.8.6:** The system shall allow admins to manage inventory levels.

**REQ-3.8.7:** The system shall send low stock alerts to admins.

**REQ-3.8.8:** The system shall allow bulk product import via CSV.

### 3.9 Newsletter

#### 3.9.1 Description
Users can subscribe to receive updates about new collections.

#### 3.9.2 Priority
Low

#### 3.9.3 Functional Requirements

**REQ-3.9.1:** The system shall allow users to subscribe with email address.

**REQ-3.9.2:** The system shall validate email format before subscription.

**REQ-3.9.3:** The system shall send confirmation email after subscription.

**REQ-3.9.4:** The system shall allow users to unsubscribe via email link.

**REQ-3.9.5:** The system shall integrate with email marketing service.

### 3.10 Reviews and Ratings

#### 3.10.1 Description
Customers can leave reviews and ratings for purchased products.

#### 3.10.2 Priority
Medium

#### 3.10.3 Functional Requirements

**REQ-3.10.1:** The system shall allow verified buyers to submit reviews with:
- Star rating (1-5)
- Written review
- Photos (optional)

**REQ-3.10.2:** The system shall display average rating on product cards and detail pages.

**REQ-3.10.3:** The system shall allow users to filter reviews by rating.

**REQ-3.10.4:** The system shall allow users to mark reviews as helpful.

**REQ-3.10.5:** The system shall allow admins to moderate reviews (approve/reject).

---

## 4. External Interface Requirements

### 4.1 User Interfaces

#### 4.1.1 General UI Requirements
- Clean, elegant design with soft color palette (beige, cream, gold)
- Glassmorphism effects on cards and components
- Smooth animations and transitions
- Responsive design for mobile, tablet, and desktop
- Accessibility compliance (WCAG 2.1 Level AA)

#### 4.1.2 Navigation
- Fixed navigation bar with logo, menu, search, account, and cart icons
- Mobile hamburger menu
- Breadcrumb navigation on product pages
- Footer with quick links and contact information

#### 4.1.3 Key Pages
- Homepage with hero, categories, featured products, testimonials
- Product listing page with filters and sorting
- Product detail page with 3D viewer
- Shopping cart page
- Checkout pages (shipping, payment, confirmation)
- User account pages (profile, orders, wishlist)
- Admin dashboard
- About, Contact, FAQ pages

### 4.2 Hardware Interfaces
Not applicable - web-based application.

### 4.3 Software Interfaces

#### 4.3.1 Database
- **System:** Firebase Firestore or Supabase PostgreSQL
- **Purpose:** Store user data, products, orders, reviews
- **Interface:** REST API or SDK

#### 4.3.2 Payment Gateway
- **System:** Midtrans, Stripe
- **Purpose:** Process payments
- **Interface:** REST API with webhooks

#### 4.3.3 Email Service
- **System:** SendGrid, Mailgun, or similar
- **Purpose:** Send transactional emails
- **Interface:** REST API or SMTP

#### 4.3.4 Cloud Storage
- **System:** Firebase Storage or Supabase Storage
- **Purpose:** Store product images and 3D models
- **Interface:** SDK or REST API

#### 4.3.5 Analytics
- **System:** Google Analytics, Mixpanel
- **Purpose:** Track user behavior and conversions
- **Interface:** JavaScript SDK

### 4.4 Communications Interfaces

#### 4.4.1 HTTP/HTTPS
- All communications use HTTPS protocol
- RESTful API architecture
- JSON data format

#### 4.4.2 WebSocket
- Real-time order status updates
- Live chat support

---

## 5. Non-Functional Requirements

### 5.1 Performance Requirements

**REQ-5.1.1:** The system shall load the homepage within 3 seconds on a 4G connection.

**REQ-5.1.2:** The system shall support at least 1000 concurrent users.

**REQ-5.1.3:** The system shall process checkout within 5 seconds.

**REQ-5.1.4:** The system shall load 3D models within 2 seconds.

**REQ-5.1.5:** The system shall achieve Lighthouse performance score of 90+.

### 5.2 Safety Requirements

**REQ-5.2.1:** The system shall backup data daily.

**REQ-5.2.2:** The system shall maintain transaction logs for audit purposes.

**REQ-5.2.3:** The system shall validate all user inputs to prevent data corruption.

### 5.3 Security Requirements

**REQ-5.3.1:** The system shall encrypt all sensitive data in transit using TLS 1.3.

**REQ-5.3.2:** The system shall hash passwords using bcrypt with salt.

**REQ-5.3.3:** The system shall implement CSRF protection.

**REQ-5.3.4:** The system shall implement rate limiting to prevent abuse.

**REQ-5.3.5:** The system shall comply with PCI DSS for payment processing.

**REQ-5.3.6:** The system shall implement role-based access control (RBAC).

**REQ-5.3.7:** The system shall log all admin actions for audit trail.

### 5.4 Software Quality Attributes

#### 5.4.1 Availability
**REQ-5.4.1:** The system shall have 99.9% uptime.

#### 5.4.2 Maintainability
**REQ-5.4.2:** The system shall use modular, component-based architecture.

**REQ-5.4.3:** The system shall include comprehensive code documentation.

#### 5.4.3 Usability
**REQ-5.4.4:** The system shall be usable by users with basic web browsing skills.

**REQ-5.4.5:** The system shall provide clear error messages and guidance.

**REQ-5.4.6:** The system shall complete checkout in maximum 5 steps.

#### 5.4.4 Scalability
**REQ-5.4.7:** The system shall scale horizontally to handle increased traffic.

**REQ-5.4.8:** The system shall support database sharding for large datasets.

#### 5.4.5 Reliability
**REQ-5.4.9:** The system shall handle errors gracefully without data loss.

**REQ-5.4.10:** The system shall recover from failures within 5 minutes.

### 5.5 Business Rules

**REQ-5.5.1:** Free shipping applies for orders above Rp 200,000.

**REQ-5.5.2:** Products can only be reviewed by verified buyers.

**REQ-5.5.3:** Discounts cannot be combined unless explicitly allowed.

**REQ-5.5.4:** Orders can be cancelled within 1 hour of placement.

**REQ-5.5.5:** Returns are accepted within 7 days of delivery.

---

## 6. Other Requirements

### 6.1 Legal Requirements

**REQ-6.1.1:** The system shall comply with Indonesian gallery and showcase regulations.

**REQ-6.1.2:** The system shall display clear terms and conditions.

**REQ-6.1.3:** The system shall display privacy policy compliant with Indonesian data protection laws.

**REQ-6.1.4:** The system shall display return and refund policy.

### 6.2 Internationalization

**REQ-6.2.1:** The system shall support Indonesian language (primary).

**REQ-6.2.2:** The system shall support English language (future).

**REQ-6.2.3:** The system shall display prices in Indonesian Rupiah (IDR).

**REQ-6.2.4:** The system shall use Indonesian date and time format.

### 6.3 SEO Requirements

**REQ-6.3.1:** The system shall generate SEO-friendly URLs.

**REQ-6.3.2:** The system shall include meta tags for all pages.

**REQ-6.3.3:** The system shall generate sitemap.xml.

**REQ-6.3.4:** The system shall implement structured data (Schema.org).

**REQ-6.3.5:** The system shall generate Open Graph tags for social sharing.

---

## Appendix A: Glossary

| Term | Definition |
|------|------------|
| Hijab | Islamic headscarf worn by Muslim women |
| Pashmina | Type of soft, lightweight hijab material |
| Segi Empat | Square-shaped hijab |
| Instan | Ready-to-wear hijab style |
| Glassmorphism | UI design trend with frosted glass effect |

---

## Appendix B: Analysis Models

### B.1 Use Case Diagram
[To be added: Use case diagram showing actors and their interactions]

### B.2 Data Flow Diagram
[To be added: DFD showing data flow through the system]

### B.3 Entity Relationship Diagram
[To be added: ERD showing database structure]

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-04-02 | Development Team | Initial version |

---

**Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Project Manager | | | |
| Technical Lead | | | |
| Client Representative | | | |
