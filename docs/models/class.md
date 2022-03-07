```mermaid
classDiagram
    class User {
        +int userId
        +string email
        +string username
        +string passwordHash
        +string profilePictureUrl
    }

    class OrderGeospatialInfo {
        +int orderGeospatialInfoId
        +int orderId
        +string placeName
        +string placeDescription
        +int north
        +int east
        +int south
        +int west
    }

    class Order {
        +int orderId
        +int userId
        +Status status
        +string orderUuid
    }

    class OrderDetails {
        +int orderDetailsId
        +int orderId
        +int productId
        +string productName
        +int deliveryCost
        +int productCost
        +int orderSubtotal
    }

    class OrderStatus {
        <<enumeration>>
        IN_PROGRESS
        ERROR
        CANCELLED
        SUCCESS
    }

    class DesignType {
        <<enumeration>>
        MAP
        QR
        LINES
    }

    class Product {
        +int productId
        +string productName
        +string productDescription
        +int price
    }

    class Design {
        +int designId
        +DesignType designType
        +string imageUrl
    }

    User "1" *-- "0 ..*" Order
    Order "1" *-- "1" OrderGeospatialInfo
    Order "1" *-- "1" OrderDetails
    Order "1" o-- "1" OrderStatus
    DesignType o-- Design

    Product -- OrderDetails

```
