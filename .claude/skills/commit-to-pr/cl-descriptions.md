# CL (Change List) Description Rules

A CL description is a public record of change, and it is important that it
communicates:

1.  **What** change is being made? This should summarize the major changes such
    that readers have a sense of what is being changed without needing to read
    the entire CL.

1.  **Why** are these changes being made? What contexts did you have as an
    author when making this change? Were there decisions you made that aren't
    reflected in the source code? etc.

## First Line

- Short summary of what is being done.
- Complete sentence, written as though it was an order.
- Follow by empty line.

## Body is Informative

The description should fill in the details and include any supplemental information a reader needs to understand the changelist holistically. It might include a brief description of the problem that's being solved, and why this is the best approach. If there are any shortcomings to the approach, they should be mentioned.

## Bad CL Descriptions

- "Fix build."
- "Add patch."

## Good CL Description

> RPC: Remove size limit on RPC server message freelist.
>
> Servers like FizzBuzz have very large messages and would benefit from reuse.
> Make the freelist larger, and add a goroutine that frees the freelist entries
> slowly over time, so that idle servers eventually release all freelist
> entries.

References: [CL Descriptions](https://github.com/google/eng-practices/blob/master/review/developer/cl-descriptions.md)
